import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { getIndType, addMember, getOneMember, updateMember } from "../admin/adminApi";
import Template from "../template";

const EditMember = ({ isAdmin, memberId }) => {
  //Industry type
  const [indVals, setIndVals] = useState([""]);
  const [successMsg, setSuccessMsg] = useState(false);
  const [memberDetails, setMemberDetails] = useState({
    companyname: "",
    contact: [
      {
        contactperson: "",
        address: "",
        mobile: "",
        fax: "",
        email: ""
      }
    ],
    industrytype: "Others...",
    years: [],
    membershiptype: "Corporate",
    applicationtype: "",
    password: ""
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
                {
                  memberDetails.years.includes(year)?
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value={year}
                    onChange={handleChange("years")}
                    checked
                  />
                  :<input
                    class="form-check-input"
                    type="checkbox"
                    value={year}
                    onChange={handleChange("years")}
                  />
                }

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

  const handleChange = (detailName, contactIndex) => event => {
    if (contactIndex || contactIndex===0) {

      let allContact = memberDetails.contact;
      allContact[contactIndex] = {
        ...allContact[contactIndex],
        [detailName]: event.target.value
      }
      // let contactObject ={
      //   ...memberDetails.contact[contactIndex],
      //   [detailName]: event.target.value
      // }
      setMemberDetails({
        ...memberDetails,
        contact: allContact

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

  const saveMember = e => {
    e.preventDefault();

    updateMember(memberDetails).then(
      (data)=>{
        console.log(data)
        setSuccessMsg("Congratulations! Update is applied.");
      }
    );
  };

  const readContactDetails = () => {
    let lala = memberDetails.contact;
    let isit = Array.isArray(memberDetails.contact);
    console.log("is: ", isit);
    console.log(memberDetails.contact);

    memberDetails.contact.map((person, index) => {
      return (
        <div className="col-sm-6">
          <strong>{index}</strong>
          <div class="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name of Contact Person"
              value={person.contactperson}
              onChange={handleChange("contactperson", true)}
            />
          </div>
        </div>
      );
    });
  };

  const addContact = () =>{
    setMemberDetails({
      ...memberDetails,
      contact:[
        ...memberDetails.contact,
        {
          contactperson: "",
          address: "",
          mobile: "",
          fax: "",
          email: ""
        }
      ]

    })
  }
  useState(() => {
    getIndType().then(data => setIndVals(data));
    getOneMember(memberId).then(data => {
      setMemberDetails({
        ...memberDetails,
        ...data.data
      });
    });
  }, []);

  return (
    <Fragment>
      <form action="" onSubmit={saveMember}>
        <div className="row mb-5">
          <div className="col-sm-12">
            {/* <h3>Member ID: {memberId}</h3> */}
            {/* NOTE: Comment out to see all details */}
            {/* <p>{JSON.stringify(memberDetails)}</p> */}
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
            <h4>Password</h4>
            <p>
              Please nominate a password
            </p>
          </div>
          <div className="col-sm-6">
            <div class="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="concrete2020"
                value={memberDetails.password}
                onChange={handleChange("password")}
              />
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

          <div className="col-sm-3">
            <p>
              Principal Business: &nbsp;
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange("industrytype")}
              >
                {indVals.map((ind, i) => {
                  return (
                    <option
                      key={i}
                      value={ind}
                      selected={memberDetails.industrytype==ind? "selected" : ""}
                      >
                      {ind}
                    </option>
                  );
                })}
              </select>
            </p>
          </div>
          <div className="col-sm-6">
            <p>{isAdmin ? yearsVerified() : null}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Contact Details</h4>
            <p></p>
          </div>
          {memberDetails.contact.map((person, index) => {
            return (
              <div className="col-sm-6">
                <div class="form-group">
                  <p><strong>{index+1}:</strong></p>
                  <label htmlFor="">Full Name of Contact Person</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name of Contact Person"
                    value={person.contactperson}
                    onChange={handleChange("contactperson", index)}
                  />
                </div>

                  <div class="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      value={person.address}
                      onChange={handleChange("address",true)}
                    />
                  </div>



                  <div class="form-group">
                    <input
                      type="telephone"
                      className="form-control"
                      placeholder="Telephone"
                    />
                  </div>


                  <div class="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={person.email}
                      onChange={handleChange('email',true)}
                    />

                </div>


                  <div class="form-group">
                    <input
                      type="telephone"
                      className="form-control"
                      placeholder="Fax"
                      value={person.fax}
                      onChange={handleChange('fax',true)}
                    />
                  </div>


                  <div class="form-group">
                    <input
                      type="telephone"
                      className="form-control"
                      placeholder="Mobile"
                      value={person.mobile}
                      onChange={handleChange('mobile',true)}
                    />
                  </div>

              </div>
            );
          })}

          <div className="col-12">
            <span className="btn btn-secondary" onClick={addContact}>Add more contact...</span>
          </div>

        </div>

        <div className="row">
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-lg btn-primary py-4 px-5 m-5 text-center"
            >
              Update Member Details
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

export default EditMember;
