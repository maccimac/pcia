import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import MemberCard from '../template/MemberCard';
import { getMembers, findMember } from './adminApi'

const Admin = () =>{
  const [allMembers, setAllMembers ] = useState([])
  const [newMembers, setNewMembers] = useState([]);
  const loaderComponent = `
  <div class="lds-ripple"><div></div><div></div></div>
  `;
  const [loaded, hasLoaded] = useState(false)




  const memberList = () =>{
    getMembers()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }else{
        setAllMembers(data)
      }
    })
  }

  const queryNew = { applicationtype: "New"};
  const getNewMembers = (query) =>{
    // console.log("query: ", queryNew);
    findMember(query).then(
      data => {
        if(data.error){
          console.log('error:', data);
          return ("No new");
        }else{
          setNewMembers(data);
          hasLoaded(true);
        }
      }
    ).catch( ()=>{
      hasLoaded(true);

    })
  }

  const showLoader = () => {
    if(loaded){
      return ""
    }else{
      return(<div className='lds-ripple'><div></div><div></div></div>)


    }
  }



  useEffect(()=>{
    // memberList();
    memberList();
    getNewMembers(queryNew);
  },[])

  return(
    <AdminTemplate
      >
    <div className="100 d-flex align-items-center">
      {showLoader()}
    </div>

    <div className="row shadow border border-warning">
      <div className="col-md-12  p-5">
        You have {newMembers.length} new registration/s.
      </div>
    </div>
    <div>
    {newMembers.map(
      (member, index)=>{
        return(
          <MemberCard
            member={member}
            isAdmin={true}
            refresh={memberList}
          />
        )
      }
    )}
    </div>

    </AdminTemplate>
  )
}

export default Admin;
