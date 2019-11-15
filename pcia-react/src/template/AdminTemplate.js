import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import MemberCard from './MemberCard'

const AdminTemplate = ({
  title="Admin Dashboard",
  description="Handle Memberships, Event Registrations, and News",
  children}
) => {

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div id="admin-nav" className="col-lg-2 bg-light p-5">
            <div className="mb-5">
              <a className="navbar-brand" href="/">
                <img src="/assets/img/PCIA-Logo_120.png" alt=""/>
              </a>
            </div>
            <div>
              <ul class="nav flex-column">
                <div className="mb-5">
                  <Link to="/admin" className="btn btn-success btn-lg mb-2">
                    Dashboard Home
                  </Link>
                  <Link to="/" className="btn btn-secondary btn-lg mb-2">
                    Website Home
                  </Link>

                </div>
                <div className="mb-5">
                  <h4>Memberships</h4>
                  <p><i>
                    Verify memberships. Edit member details. Download member list.
                  </i></p>
                  <Link to="/admin/members" className="btn btn-primary btn-lg">
                    View All Members
                  </Link>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/admin/members/add">Add New Member</Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                  </li> */}
                </div>
                <div className="mb-5">
                  <h4>Event Registrations</h4>
                  <p><i>
                    View upcoming registrations.
                  </i></p>

                    <Link className="btn btn-primary btn-lg" to="#">Event Registrations</Link>

                  {/* <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                  </li> */}
                </div>




              </ul>
                          </div>


          </div>
          <div id="admin-body" className="col-lg-10 p-5">
            <div>
              <h1>{title}</h1>
              <h2>{description}</h2>
            </div>
            <div>
              {children}
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>

  )
}

export default AdminTemplate;
