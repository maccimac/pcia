import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import AdminTemplate from '../template/AdminTemplate';
import MemberCard from '../template/MemberCard';
import { getMembers } from './adminApi'



const Admin = () =>{
  const [allMembers, setAllMembers ] = useState([])
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
  useEffect(()=>{
    memberList();
  },[])

  return(
    <AdminTemplate
      >
    <div className="row shadow border border-warning">
      <div className="col-md-12  p-5">
        You have (x) new registrations.

      </div>

    </div>

    </AdminTemplate>
  )
}

export default Admin;
