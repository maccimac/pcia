import React, { useState, useEffect, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { findByEmail } from "../admin/adminApi";

import Template from '../template';



const MemberAccess = ( ) => {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  // const [user, setUser]= useState({});
  const [redirect, setRedirect] = useState(false);

  const matchPw = function(){
    let userData = {};
    findByEmail(un).then(resData =>{
      if(resData.error){
        console.log(resData)
        alert("Sorry your email is not in our database.")
      }else{
        let user = resData.data[0];

        let correctPw = user.password? user.password : "concrete2020";

        if(pw == correctPw){
          setRedirect(true);
        }else{
          alert(`Hello, ${user.companyname}. Sorry but you have entered incorrect password for ${un}.`)
        }

      }
    })

    function validate(){
      let correctPw = userData.password? userData.password : "concrete2020";

      if(pw == correctPw){
        setRedirect(true);
      }else{
        alert(`Hello, ${userData.companyname}. Sorry but you have entered incorrect password for ${un}.`)
      }
    }


  }

  const getPassword = () =>(
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 row">
        <div className="col-sm-6">
          <label className="text-white" htmlFor="">Email</label>
          <input className="m-auto px-2 py-2 w-100" type="text" value={un} placeholder="name@companyemail" onChange={
            (e)=>{
              setUn(e.target.value);

              }
          }/>
        </div>
        <div className="col-sm-6">
          <label className="text-white" htmlFor="">Password</label>
          <input className="m-auto px-2 py-2 w-100" type="password" value={pw} placeholder="Password" onChange={
            (e)=>{
              setPw(e.target.value);
            }
          }/>
        </div>
        <div className="col-12 text-center p-5">
          <button className="btn btn-lg btn-secondary px-5 py-3" onClick={matchPw}>
            Enter
          </button>
        </div>



        </div>

      </div>
    </div>

  )


  return(
    <Fragment>
      <Template
        header={{
          title:"Members-only Section",
          sub:"Private Directory",
          children: getPassword(),
        }
        }

        >

      </Template>
      {redirect ? <Redirect to="/members-only/directory"/> : null}
    </Fragment>
  )
}

export default MemberAccess;
