import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import MemberCard from '../template/MemberCard';
import { showLoader } from '../template/utilities';
import { getMembers } from './adminApi'



const AdminMembers = () =>{
  const [allMembers, setAllMembers ] = useState([])
  const [loaded, hasLoaded] = useState(false);
  const memberList = () =>{
    getMembers()
    .then(data=>{
      if(data.error){
        console.log(data)
      }else{
        setAllMembers(data)
      }
      hasLoaded(true)
    })
  }
  useEffect(()=>{
    memberList();
  },[])

  return(
    <AdminTemplate
      title="Members"
      description="Find Members"
      >




      <div className="row">
        <div className="col-12">
          <div className="m-auto">
          {showLoader(loaded)}
          </div>
        </div>
        <div className="col-md-3">
          View All
        </div>
        <div className="col-md-5">
          Filter
        </div>
        <div className="col-md-4">
          Search
        </div>
      </div>
      <div>
        {allMembers.map(
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

export default AdminMembers;
