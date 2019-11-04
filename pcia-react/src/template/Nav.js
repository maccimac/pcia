import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (


  <div className="container-fluid">
    <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark">

        <a className="navbar-brand" href="/">
          <img src="/assets/img/PCIA-Logo_120.png" alt=""/>
        </a>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/home">Home</Link>
              <Link className="nav-item nav-link" to="/about">About PCIA</Link>
              <Link className="nav-item nav-link disabled" to="/news">News and Resources</Link>
              <Link className="nav-item nav-link " to="/events">Event Registration</Link>
              <Link className="nav-item nav-link disabled" to="/members-only">Members-only Section</Link>

              <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>
            {/*  <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Membership
             </Link>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <Link class="dropdown-item" to="/why-be-a-member">Why be a Member</Link>
               <Link class="dropdown-item" to="/members-only">Members-only Section</Link>
               <div class="dropdown-divider"></div>
               <Link class="dropdown-item" to="/be-a-member">Be a Member</Link>
             </div> */}

              <Link className="nav-item nav-link" to="/membership">
                <button className="btn btn-secondary">
                  Be A Member
                </button>
              </Link>
            </div>
          </div>


      </nav>
  </div>
)

export default Nav;
