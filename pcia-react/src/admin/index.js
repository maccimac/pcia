import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template';
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
    <Template
      header={
        {
          title: "Welcome to Admin"
        }
      }
      >
      <p>Hi</p>
      {JSON.stringify(allMembers)}

    </Template>
  )
}

export default Admin;
