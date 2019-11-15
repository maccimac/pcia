import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
// import AdminTemplate from '../template/AdminTemplate';
import { verifyMember } from '../admin/adminApi'

const MemberCard = ({
  member,
  isAdmin = false
}

) =>{

  const [contact, setContact]= useState([]);
  useEffect(
    ()=>{
      setContact(member.contact)
    },[]
  )

  let thisYear = new Date();
  thisYear = thisYear.getFullYear();

  const verify = () =>{

    if(member.years.includes(thisYear)){
      if(!isAdmin){
        return (
          <div className="pill">Verified for {thisYear-1} to {thisYear}</div>
        )

      }
    }
    return(
        <Fragment>
          {member.years.map(
            (year, index)=>(
              <div className="pill">Verified for {year-1} - {year}</div>
            )
          )}
        </Fragment>
      )

  }


  const verifyBtn = () =>{

    if(!member.years.includes(thisYear)){
      return(
        <Fragment>

          <button className="btn btn-mint" onClick={verifyForThisYear}><i>Paid member?</i> Click to  verify for {thisYear}</button>
        </Fragment>

      )
    }
  }

  const verifyForThisYear = () =>{
    verifyMember(member._id, thisYear)
      // .then(data=>{
      //   if(data.error){
      //     console.log(data.error)
      //   } else{
      //     console.log(data)
      //   }
      // })
  }

  const adminSection = () =>{
    if(isAdmin){
      return(
        <div className="admin-section d-block my-4">
          <h4>Admin Section</h4>
          <div className="d-block mb-3">

            {verifyBtn()}
            <Link className="" to={"admin/members/edit/"+member._id}>
              <button className="btn btn-warning">
                Edit Member Details
              </button>
            </Link>
          </div>


        </div>

      )
    }

  }

  return(
    <Fragment>

      <div className="member-card row shadow my-5 p-4 align-items-center">
        <div className="col-md-7 px-5">

          <h3>{member.companyname}</h3>
          <div className="pill pill-blue">
            {member.industrytype}
          </div>
          {verify()}
          {/* {JSON.stringify(member)} */}

          <div className="d-block mb-2">

          </div>
          {adminSection()}










        </div>
        <div className="col-md-5">
          <h4>Contact Details</h4>
          {contact.map(
            (contactGrp,index) =>(
              <ul>
                {
                  contactGrp.contactperson ?
                   (<li>Contact Person: {contactGrp.contactperson}</li>) : null

                }
                {
                  contactGrp.address ?
                   (<li>Address: {contactGrp.address}</li>) : null

                }
                {
                  contactGrp.phone ?
                   (<li>Phone: {contactGrp.phone}</li>) : null

                }
                {
                  contactGrp.mobile ?
                   (<li>Mobile: {contactGrp.mobile}</li>) : null

                }
                {
                  contactGrp.email ?
                   (<li>Email: {contactGrp.email}</li>) : null

                }
              </ul>
            )
            )}
        </div>
      </div>

    </Fragment>
  )

}

export default MemberCard;
