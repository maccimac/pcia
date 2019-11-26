import React, { useState, useEffect, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';

import Template from '../template';



const MemberAccess = ( ) => {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const [redirect, setRedirect] = useState(false);

  const getPassword = () =>(
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2 row">
        <div className="col-sm-6">
          <label className="text-white" htmlFor="">Username</label>
          <input className="m-auto px-2 py-2 w-100" type="text" value={un} placeholder="Company Name" onChange={
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
          <button className="btn btn-lg btn-secondary px-5 py-3" onClick={()=>{
            if(pw=="concrete2020"){
              setRedirect(true);
            }
          }

          }>
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
