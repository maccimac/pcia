import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template'

const Membership = ( ) => {

  const checkbox = value => (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value={value} id="defaultCheck1"/>
      <label class="form-check-label" for="defaultCheck1">
        {value}
      </label>
    </div>

  )
  return (
  <Template
    header={{
      title: "Be a Member",
      sub: "Benefits and Membership Form"
    }}
    >
    <section>
      <div className="container-fluid">
        <div className="minheight-8rem">&nbsp;</div>
        <div className="row align-items-center">
          <div className="offset-sm-1 col-sm-5 ">
            <h3>Why be a Member</h3>
            <p className="mb-5">
              Support community. Support the vision. Be in the know. <strong>
                Members are entitled to discount at all association sponsors seminars
              </strong>
            </p>
            <h4>What do members get?</h4>
            <ul className="ml-4">
              <li>Discounts</li>
              <li><Link to="/members-only"> Members-only resources</Link></li>
              <li>Event invites</li>
            </ul>

          </div>
          <div className="col-sm-6 minheight-32rem" style={{
            backgroundImage: "url('/assets/img/PCIA-team_1086.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>

          </div>
        </div>
        <div className="minheight-8rem">&nbsp;</div>
      </div>
    </section>
    <section className="bg-gradient text-light">

      <div className="container">
        <div className="minheight-8rem">&nbsp;</div>
        <div className="row">
          <div className="offset-sm-1 col-sm-10">
            <h3 className="mb-5">How to be a Member:</h3>
            <ol>
              <li>
                Fill up membership form on this page.</li>
                <li>
                Settle your payment. Payment options and bank payments found below (click to see details).</li>
                <li>
                Submit photo/scan of deposit slip below. You can email it to <strong className="text-white">pcia.sec@acs-manufacturing.com</strong>. You can also send deposit slip via fax at  <strong className="text-white">916-3740/916-3658</strong>.</li>
            </ol>
            <em>
              *For confirmation and concern please call 638-34-14 to 24 look for <strong className="text-white">Tin/Julie</strong>
            </em>

          </div>
        </div>
        <div className="minheight-32rem">&nbsp;</div>
      </div>
      </section>

        <div className="container bg-light zindex-dropdown p-5 mb-5" style={{
          marginTop: "-24rem",
        }}>
        <div className="minheight-2rem">&nbsp;</div>

          <form action="">
            <div className="row mb-5">
              <div className="col-sm-12">
                <h3>Membership Form</h3>
                <p>Please  fill our form to register or renew your membership with the association.</p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-sm-12 mb-3">
                <h4>Application Type</h4>
                <p>
                  The calendar year of the association would be March to February. Membership fees are as follows.
                </p>
              </div>
              <div className="col-sm-6">

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" for="inlineRadio1">Renewal</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" for="inlineRadio1">Full-year</label>
                </div>

              </div>
              <div className="col-sm-6">

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" for="inlineRadio1">Corporate (P 6,000)</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label className="form-check-label" for="inlineRadio1">Individual (P 3,000)</label>
                </div>

              </div>
            </div>
            <div className="row mb-5">
              <div className="col-sm-12 mb-3">
                <h4>Information Sheet</h4>
                <p>
                  Please fill in all blanks so proper notification can be made for meetings / seminars.
                </p>
              </div>

              <div className="col-sm-6">
                <div class="form-group">
                  <input type="text" className="form-control" placeholder="Name of Company or Individual"/>
                </div>
              </div>

              <div className="col-sm-6">
                <div class="form-group">
                  <input type="text" className="form-control" placeholder="Full Name of Contact Person"/>
                </div>
              </div>

              <div className="col-sm-8">
                <div class="form-group">
                  <input type="text" className="form-control" placeholder="Address"/>
                </div>
              </div>

              <div className="col-sm-4">
                <div class="form-group">
                  <input type="telephone" className="form-control" placeholder="Telephone"/>
                </div>
              </div>

              <div className="col-sm-4">
                <div class="form-group">
                  <input type="email" className="form-control" placeholder="Email"/>
                </div>
              </div>

              <div className="col-sm-4">
                <div class="form-group">
                  <input type="telephone" className="form-control" placeholder="Fax"/>
                </div>
              </div>

              <div className="col-sm-4">
                <div class="form-group">
                  <input type="telephone" className="form-control" placeholder="Mobile"/>
                </div>
              </div>

              <div className="col-sm-12 mt-3">
                <p>Principal Business (Press check all appropriate answers)</p>
              </div>

              <div className="col-sm-4">
                {checkbox("Readymix Concrete")}
                {checkbox("Engineering")}
                {checkbox("Contractor")}
                {checkbox("Concrete Block")}
              </div>

              <div className="col-sm-4">
                {checkbox("Cement Manufacturer")}
                {checkbox("Architect")}
                {checkbox("Consultant")}
                {checkbox("Prestess / Precast")}
              </div>

              <div className="col-sm-4">
                {checkbox("Chemical Admixtures")}
                {checkbox("Testing Laboratory")}
                {checkbox("Mineral Admixtures")}
                {checkbox("Aggregates")}
              </div>

              <div className="col-sm-9 mb-5">
                <div className="form-inline">
                  {checkbox("Others:")}

                  <div class="form-group ml-2">
                    <input type="text" className="form-control" placeholder="... Please specify"/>
                  </div>
                </div>

              </div>

              <div className="col-sm-12 mt-5 text-center row">
                <div className="offset-sm-1 col-sm-10">
                  <h4 className="text-left">Payment</h4>
                  <p>You may send your payment to Secretariat Office at</p>
                  <div className="bg-white p-5 my-3">
                    Unit 1108 Antel Global Corporate Center<br/>
                    #3 Julia Vargas Ave. Ortigas Center Pasig City
                  </div>

                  <p>
                    Look for Tin Escario or Julie Ong <br/>
                    Phone: 636414 to 24 <br/>
                    Fax: 916-3658 / 916-3740 <br/>
                  </p>

                  <hr className="my-5"/>

                </div>





                <div className="offset-sm-1 col-sm-10">
                  <strong>For Checks:</strong>
                  <p>
                  Please make the check payable to: <br/>
                   <strong className="text-blue">PHILIPPINE CONCRETE INDUSTRY ASSOCIATION.</strong> <br/>
                  An Official  Receipt (O.R.) will be issued upon payment

                  </p>
                  <p>
                    You may deposit your payment to any China Bank Branch. Details as follows:
                  </p>

                  <div className="bg-white p-5 my-3 text-left">
                    <strong>Account Name:</strong> Philippine Conrete Industry Association <br/>
                    <strong>Account Number:</strong> 219-010401-8 <br/>
                    <strong>Bank Name:</strong> China Bank Corporation <br/>
                    <strong>Bank Address:</strong> Mandaluyong - Pioneer Branch
                    Globe Telecom Palaza Tower 1, Pioneer St, Mandaluyong City

                  </div>
                  <p className="mx-5">
                    <em className="text-red">
                      Don’t forget to email / fax us the copy of deposit slip made for this payment so we can issue necessary official receipts. You may also attach your deposit slip in this form if you have a photo available now.
                    </em>
                  </p>
                  {checkbox("I have read and understood the  payment instructions")}
                  {checkbox("I have a copy of deposit slip that I can attach right now")}

                  <button type="submit" className="btn btn-lg btn-primary py-4 px-5 m-5" > Submit Membership Form</button> 

                </div>


              </div>


            </div>

          </form>
        </div>

      <div className="bg-white">
      </div>

      <div className="minheight-8rem">&nbsp;</div>


  </Template>
)}

export default Membership;
