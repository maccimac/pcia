import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { getIndType, addMember } from "../admin/adminApi";
import Template from "../template";

const NewMember = ({ isAdmin = false }) => {
  //Industry type
  const [indVals, setIndVals] = useState([]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [memberDetails, setMemberDetails] = useState({
    companyname: "",
    contact: {
      contactperson: "",
      address: "",
      mobile: "",
      fax: "",
      email: ""
    },
    industrytype: "Others...",
    years: [],
    membershiptype: "Corporate",
    applicationtype: "New"
  });



  const checkbox = value => (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={value}
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        {value}
      </label>
    </div>
  );
  const yearsVerified = () => {
    let thisYear = new Date();
    thisYear = thisYear.getFullYear();

    let yearsSince17 = [];
    for (let i = 2017; i < thisYear + 1; i++) {
      yearsSince17.push(i);
    }
    return (
      <Fragment>
        Years Verified: &nbsp; <br />
        <ul className="list-inline d-inline-block">
          {yearsSince17.map((year, index) => {
            return (
              <li className="list-inline-item mx-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={year}
                  onChange={handleChange("years")}
                />
                <label class="form-check-label" for="defaultCheck1">
                  {year}
                </label>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  };

  const paymentNotes = () => (
    <div className="col-sm-12 mt-5 text-center row">
      <div className="offset-sm-1 col-sm-10">
        <h4 className="text-left">Payment</h4>
        <p>You may send your payment to Secretariat Office at</p>
        <div className="bg-white p-5 my-3">
          Unit 1108 Antel Global Corporate Center
          <br />
          #3 Julia Vargas Ave. Ortigas Center Pasig City
        </div>

        <p>
          Look for Tin Escario or Julie Ong <br />
          Phone: 636414 to 24 <br />
          Fax: 916-3658 / 916-3740 <br />
        </p>

        <hr className="my-5" />
      </div>

      <div className="offset-sm-1 col-sm-10">
        <strong>For Checks:</strong>
        <p>
          Please make the check payable to: <br />
          <strong className="text-blue">
            PHILIPPINE CONCRETE INDUSTRY ASSOCIATION.
          </strong>{" "}
          <br />
          An Official Receipt (O.R.) will be issued upon payment
        </p>
        <p>
          You may deposit your payment to any China Bank Branch. Details as
          follows:
        </p>

        <div className="bg-white p-5 my-3 text-left">
          <strong>Account Name:</strong> Philippine Conrete Industry Association{" "}
          <br />
          <strong>Account Number:</strong> 219-010401-8 <br />
          <strong>Bank Name:</strong> China Bank Corporation <br />
          <strong>Bank Address:</strong> Mandaluyong - Pioneer Branch Globe
          Telecom Palaza Tower 1, Pioneer St, Mandaluyong City
        </div>
        <p className="mx-5">
          <em className="text-red">
            Don’t forget to email / fax us the copy of deposit slip made for
            this payment so we can issue necessary official receipts. You may
            also attach your deposit slip in this form if you have a photo
            available now.
          </em>
        </p>
        {checkbox("I have read and understood the  payment instructions")}
        {checkbox("I have a copy of deposit slip that I can attach right now")}
      </div>
    </div>
  );

  const handleChange = (detailName, ifContact = false) => event => {
    if (ifContact) {
      setMemberDetails({
        ...memberDetails,
        contact: {
          ...memberDetails.contact,
          [detailName]: event.target.value
        }
      });
    } else {
      if (detailName == "years") {
        if (!event.target.checked) {
          //remove years
          let updatedYears = memberDetails.years;
          updatedYears.map((i, k) => {
            if (i == event.target.value) {
              updatedYears.splice(k);
            }
          });
          console.log("updatedYears", updatedYears);

          setMemberDetails({
            ...memberDetails,
            years: updatedYears
          });
        } else {
          //add year to years array
          setMemberDetails({
            ...memberDetails,
            years: [...memberDetails.years, event.target.value]
          });
        }
      } else {
        setMemberDetails({
          ...memberDetails,
          [detailName]: event.target.value
        });
      }
    }
  };

  const saveMember = (e) => {
    e.preventDefault();

    addMember(memberDetails);

    if (isAdmin) {
      setSuccessMsg("Congratulations! You have added a new user.");
    } else {
      setSuccessMsg(
        "Congratulations! You have sent your application! We emailed you your details. Our admin, Tin, will confirm your membership!"
      );
    }
    setMemberDetails({
      companyname: "",
      contact: {
        contactperson: "",
        address: "",
        mobile: "",
        fax: "",
        email: ""
      },
      industrytype: "Others...",
      years: [],
      membershiptype: "Corporate",
      applicationtype: ""
    });
  };

  useState(() => {
    getIndType().then(data => setIndVals(data));

    if (isAdmin) {
      setMemberDetails({
        ...memberDetails,
        applicationtype: ""
      });
    }
    
  }, []);

  return (
    <Fragment>
      <form action="" onSubmit={saveMember}>
        <div className="row mb-5">
          <div className="col-sm-12">
            <h3>Membership Form</h3>
            <p>
              Please fill our form to register or renew your membership with the
              association.
            </p>
            <p>{JSON.stringify(memberDetails)}</p>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-12 mb-3">
            <h4>Application Type</h4>
            <p>
              The calendar year of the association would be March to February.
              Membership fees are as follows.
            </p>
          </div>
          {isAdmin ? null : (
            <Fragment>
              <div className="col-sm-6">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="applicationtype"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Renewal
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="applicationtype"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Full-year
                  </label>
                </div>
              </div>
            </Fragment>
          )}

          <div className="col-sm-6">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="membershiptype"
                value="Corporate"
                onChange={handleChange("membershiptype")}
                checked={
                  memberDetails.membershiptype == "Corporate" ? "checked" : null
                }
              />
              <label className="form-check-label">Corporate (P 6,000)</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="membershiptype"
                value="Individual"
                onChange={handleChange("membershiptype")}
                checked={
                  memberDetails.membershiptype == "Individual"
                    ? "checked"
                    : null
                }
              />
              <label className="form-check-label" for="inlineRadio1">
                Individual (P 3,000)
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-sm-12 mb-3">
            <h4>Information Sheet</h4>
            <p>
              Please fill in all blanks so proper notification can be made for
              meetings / seminars.
            </p>
          </div>

          <div className="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name of Company or Individual"
                value={memberDetails.companyname}
                onChange={handleChange("companyname")}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name of Contact Person"
                value={memberDetails.contact.contacontactperson}
                onChange={handleChange("contactperson", true)}
              />
            </div>
          </div>

          <div className="col-sm-8">
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                value={memberDetails.contact.address}
                onChange={handleChange("address", true)}
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div class="form-group">
              <input
                type="telephone"
                className="form-control"
                placeholder="Telephone"
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div class="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={memberDetails.contact.email}
                onChange={handleChange("email", true)}
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div class="form-group">
              <input
                type="telephone"
                className="form-control"
                placeholder="Fax"
                value={memberDetails.contact.fax}
                onChange={handleChange("fax", true)}
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div class="form-group">
              <input
                type="telephone"
                className="form-control"
                placeholder="Mobile"
                value={memberDetails.contact.mobile}
                onChange={handleChange("mobile", true)}
              />
            </div>
          </div>

          <div className="col-sm-3">
            <p>
              Principal Business: &nbsp;
              {/* <div class="form-group d-inline-block"> */}
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange("industrytype")}
              >
                {indVals.map((ind, i) => {
                  return (
                    <option key={i} value={ind}>
                      {ind}
                    </option>
                  );
                })}
              </select>
              {/* </div> */}
            </p>
          </div>
          <div className="col-sm-6">
            <p>{isAdmin ? yearsVerified() : null}</p>
          </div>
        </div>
        <div className="row">
          {!isAdmin ? paymentNotes() : null}
          <div className="col-12 text-center">
            <button
              className="btn btn-lg btn-primary py-4 px-5 m-5 text-center"
              type="submit"
            >
              {isAdmin ? "Add Member" : "Submit Membership Form"}
            </button>
          </div>
        </div>
      </form>
      {successMsg ? (
        <div class="alert alert-success" role="alert">
          {successMsg}
        </div>
      ) : null}
    </Fragment>
  );
};

export default NewMember;
