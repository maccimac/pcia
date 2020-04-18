import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import MemberCard from '../template/MemberCard';
import { getMembers, findMember } from './adminApi'

const Admin = () =>{
  const [allMembers, setAllMembers ] = useState([])
  const [newMembers, setNewMembers] = useState([]);
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

  const queryNew ={ applicationtype: "New"};

  // const name ={"Anthropology Resources Inc."}

  const getNewMembers = (query) =>{
    // console.log("query: ", queryNew);
    findMember(query).then(
      data => {
        if(data.error){
          console.log('error:', data);
          return ("No new");
        }else{
          setNewMembers(data);
        }
      }
    )
  }
  getNewMembers(queryNew);

  useEffect(()=>{
    memberList();
  },[])

  return(
    <AdminTemplate
      >
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
