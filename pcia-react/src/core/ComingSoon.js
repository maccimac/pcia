import React, { useState, useEffect, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from '../template/Header';
import Footer from '../template/Footer';

const ComingSoon = ( ) => {
  const [pw, setPw] = useState("");
  const [redirect, setRedirect] = useState(false);

  const getPassword = () =>(
    <div className="container">
      <div className="row text-center">
        <div className="col-sm-6 offset-sm-3">
          <input className="m-auto px-5 py-2 w-100" type="text" value={pw} placeholder="Enter password review production mode..." onChange={
            (e)=>{
              setPw(e.target.value);
              if(e.target.value==="concrete2020"){
                setRedirect(true);
              }
            }
          }/>
          {/* <button className="btn btn-outline-success btn-lg px-5 m-3" onClick={
            ()=>{
              if(pw=="concrete2020"){
                setRedirect(true);
              }
            }
          }>
            Enter Production Mode
          </button> */}
        </div>

      </div>
    </div>

  )


  return(
    <Fragment>
      <Header
        title="Coming Soon"
        sub="Philippine Concrete Industry Association"
        showNav={false}
        >

        {getPassword()}
      </Header>
      {redirect ? <Redirect to="/home"/> : null}
      <Footer/>
    </Fragment>
  )
}

export default ComingSoon;
