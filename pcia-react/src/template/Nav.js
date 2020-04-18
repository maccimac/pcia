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
              <Link className="nav-item nav-link " to="/events">Event Registration</Link>
              <Link className="nav-item nav-link" to="/members-only">Members-only Section</Link>
              <Link className="nav-item nav-link" to="/admin-access">Admin</Link>

              <Link className="nav-item nav-link" to="/contact-us">Contact Us</Link>

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
