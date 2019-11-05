import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template'
import { FB, FacebookApiException } from 'fb';
import { FBGraphAPI } from 'fb-graph-api';
import dateFormat from 'dateformat'

const Events = ( ) => {
  const[fbEvents, setFbEvents]=useState([]);
  const[selectedEvent, setSelectedEvent]=useState(false);
  const[fbAccessToken, setFbAcessToken] = useState("");

  // VISIT URL TO RENEW
  // https://sujipthapa.co/blog/generating-never-expiring-facebook-page-access-token
  const fbAccessToken2020Jan = "EAAINE5UI8PsBAIyZAgEp3md8q41bNpNBnTRVC0Dc9nZA5WDRTDr872BjIM63BiO0Y5KBLzbaXlVQf7XA6jyctrTVxW5CcXEF1YrZBz4VBWh5ePKXdZAaKyEZCut5a43HnRisc9GIZB0JM361pcMBnAhV0oKL4ZCgZAsTb7EtKtbjnwZDZD";



  const getEvents = () =>{
      FB.api(
    '/philconcrete',
    'GET',{
      fields: ['events'], access_token: fbAccessToken2020Jan
    },
    function(response) {
        console.log(response);
        setFbEvents(response.events.data)
    }
  );
  }



//TESTED WAYS TO GET ACCESS TOKEN
  const getAccessToken = () =>{

    FB.api('oauth/access_token', {
    client_id: 1716477751937756,
    client_secret: 'f73e3c59135fbbca1657c7d39ec9bdce',
    grant_type: 'page'
  }, function (res) {
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        console.log("finding accessToken")
    }
    // const accessToken = res.access_token;
    setFbAcessToken(res.access_token)
    });
  }

  const getAccessToken2 = () =>{
    const FbApi = new FBGraphAPI({
      clientID: '577327709352187',
      clientSecret: '4761ba5e0b34320038514820588ccb83',
      // appAccessToken: 'd53eee1c6d89f0c7daf55140326a5d0a' // Optional
    });

    FbApi.generateAppAccessToken()
    .then(appAccessToken => {
        console.log('appAccessToken 2', appAccessToken);
        setFbAcessToken(appAccessToken)
    })
    .catch(e => console.log('e', e));
  }




  useState(()=>{
    getEvents()
  },[])

  const checkbox = value => (
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value={value} id="defaultCheck1"/>
      <label class="form-check-label" for="defaultCheck1">
        {value}
      </label>
    </div>

  )

  const headerContent = () =>(
    <div className="minheight-10rem">
      &nbsp;
    </div>
  )
  const handleChange = (e) =>{
    // console.log(fbEvents[e.target.value]);
    setSelectedEvent(fbEvents[e.target.value]);
    console.log()

      // setSelectedEvent(fbEvents.e.target.value)
  }

  const eventDetail = () =>{
    // let date = Date.parse(selectedEvent.start_time)
    // date = date.getDate()
    // date.format("m/dd/yy")
    if(selectedEvent){
      let date = dateFormat(selectedEvent.start_time, "fullDate");
      return (
        <div className="my-5">
          {/* {JSON.stringify(selectedEvent)} */}
          <h4>Event Details</h4>
          <h5>{selectedEvent.name}</h5>
              <p>To be held on <strong> {date} </strong> at <strong>{selectedEvent.place.name}</strong>.
              </p>

              <p>
                <small>{selectedEvent.description}</small>

              </p>


        </div>
      )
    }
  }

  const formatDate = (date) =>{
    var monthNames = [
   "January", "February", "March",
   "April", "May", "June", "July",
   "August", "September", "October",
   "November", "December"
   ];

   var day = date.getDate();
   var monthIndex = date.getMonth();
   var year = date.getFullYear();

   return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  return (
  <Template
    header={{
      title: "Events",
      sub: "Reserve a slot for you or your team",
      children: headerContent()
    }}
    >
    <form action="">
      <div className="container bg-light zindex-dropdown p-5 mb-5" style={{
        marginTop: "-12rem",
      }}>
      <div className="row">
        <div className="offset-sm-2 col-sm-8 text-center p-3">
          <h3 className="mb-5">
            Which event are you interested in?
          </h3>
          <div className="form-group">
          <h4>Choose Upcoming Event/s</h4>
          <select className="form-control p-3" id="exampleFormControlSelect1" onChange={handleChange}>
            <option>...</option>
            {fbEvents.map((event, index)=>{
              let today = new Date;
              let eventDate = Date.parse(event.start_time)
              // CODE FOR LAUNCH
              // if( eventDate > today ){
              //   return(
              //     <option>{event.name}</option>
              //   )
              // }
              return(
                <option value={index}>{event.name}</option>
              )


            })}

          </select>



          {eventDetail()}
        </div> {/* Form group */}
        </div>
      </div>
      {/* row */}

  </div>
  <div className="container p-5">
    <div className="row mb-5">
      <div className="col-sm-12">
        <h3>More About You</h3>
      </div>
      <div className="col-sm-6">
        <h4>Your Team / Company</h4>
        <div class="form-group">
          <input type="text" className="form-control" placeholder="Your Company Name"/>
        </div>
        <div class="form-group">
          <input type="text" className="form-control" placeholder="Your Company Address"/>
        </div>

        <p>Your team will be participating as</p>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label">Attendee</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label">Sponsor</label>
        </div>

      </div>
      <div className="col-sm-6">
        <h4>About You</h4>
        <div class="form-group">
          <input type="text" className="form-control" placeholder="Full Name of Contact Person"/>
        </div>
        <div class="form-group">
          <div className="row form-row p-1">
            <input type="email" className="form-control col-sm-6 mx-1" placeholder="Email"/>
            <input type="telephone" className="form-control col-sm-5 mx-1" placeholder="Mobile"/>

          </div>

        </div>


        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
          <label className="form-check-label">I am already a PCIA Member</label>
        </div>


      </div>


    </div>

    <div className="row bg-light p-5">
      <div className="col-sm-12">
        <h3>Confirm your reservation</h3>
        <h4>Payment</h4>
        <p>
          Deposit your registration or sponsorship fee to any China Bank Branch. Details as follows:
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
            Don’t forget to email us the copy of deposit slip made for this payment so we can issue necessary official receipts.
          </em>
        </p>
        {checkbox("I have read and understood the  payment instructions")}
        {checkbox("I have a copy of deposit slip that I can attach right now")}

        <button type="submit" className="btn btn-lg btn-primary py-4 px-5 m-5" > Reserve Your Slot</button>


      </div>
    </div>




  </div>

  </form>
  </Template>
)
}


export default Events;
