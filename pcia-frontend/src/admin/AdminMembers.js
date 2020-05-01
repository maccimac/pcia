import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import MemberCard from '../template/MemberCard';
import { getMembers } from './adminApi'



const AdminMembers = () =>{
  const [allMembers, setAllMembers ] = useState([])
  const memberList = () =>{
    getMembers()
    .then(data=>{
      if(data.error){
        console.log(data)
      }else{
        setAllMembers(data)
      }
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
