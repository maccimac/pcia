import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Template from "../template";
import { FB, FacebookApiException } from "fb";
import { FBGraphAPI } from "fb-graph-api";
import dateFormat from "dateformat";
import emailjs from "emailjs-com";
import { showLoader } from '../template/utilities';

const Events = () => {

  const [fbEvents, setFbEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [fbAccessToken, setFbAcessToken] = useState("");
  const [loaded, hasLoaded] = useState(true);
  const [regDetails, setRegDetails] = useState({
    event: "",
    eventurl: "",
    companyname: "",
    companyaddress: "",
    attendeeorsponsor: "Attendee AND Sponsor",
    attendeenum: "",
    attendeenames: "",
    contactname: "",
    mobile: "",
    email: "",
    ismember:false,
    success: false
  });

  // VISIT URL TO RENEW
  // https://sujipthapa.co/blog/generating-never-expiring-facebook-page-access-token

  // const fbAccessToken2020Jan = "EAAINE5UI8PsBAIyZAgEp3md8q41bNpNBnTRVC0Dc9nZA5WDRTDr872BjIM63BiO0Y5KBLzbaXlVQf7XA6jyctrTVxW5CcXEF1YrZBz4VBWh5ePKXdZAaKyEZCut5a43HnRisc9GIZB0JM361pcMBnAhV0oKL4ZCgZAsTb7EtKtbjnwZDZD";

  const fbAccessToken2020Apr =
    "EAAYZAIJ6rStwBAIJOfQOWOO3gsCDZA1NSLP8xl1IxkutgcMGb6WWG3Mdw2lOM15CSJFnybZA7kn4223AY1vrk46RASsgmXL3anccIyQnxBT7GUL8PYfBj8E0nEiiTJA64a1aT76uCc4LtPPEZBP5WDHuAwzAgEZA1ZBUFENvnuogZDZD";

  const getEvents = () => {
    FB.api(
      "/philconcrete",
      "GET",
      {
        fields: ["events"],
        access_token: fbAccessToken2020Apr
      },
      function(response) {
        console.log(response);
        setFbEvents(response.events.data);
      }
    );
  };

  //TESTED WAYS TO GET ACCESS TOKEN
  // const getAccessToken = () => {
  //   FB.api(
  //     "oauth/access_token",
  //     {
  //       client_id: 1716477751937756,
  //       client_secret: "f73e3c59135fbbca1657c7d39ec9bdce",
  //       grant_type: "page"
  //     },
  //     function(res) {
  //       if (!res || res.error) {
  //         console.log(!res ? "error occurred" : res.error);
  //         console.log("finding accessToken");
  //       }
  //       // const accessToken = res.access_token;
  //       setFbAcessToken(res.access_token);
  //     }
  //   );
  // };
  //
  // const getAccessToken2 = () => {
  //   const FbApi = new FBGraphAPI({
  //     clientID: "577327709352187",
  //     clientSecret: "4761ba5e0b34320038514820588ccb83"
  //     // appAccessToken: 'd53eee1c6d89f0c7daf55140326a5d0a' // Optional
  //   });
  //
  //   FbApi.generateAppAccessToken()
  //     .then(appAccessToken => {
  //       console.log("appAccessToken 2", appAccessToken);
  //       setFbAcessToken(appAccessToken);
  //     })
  //     .catch(e => console.log("e", e));
  // };

  // useState(()=>{
  //   getEvents()
  // },[])

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

  const headerContent = () => <div className="minheight-10rem">&nbsp;</div>;


  const setEventData = () =>{
    console.log(selectedEvent)


    console.log(regDetails)

  }

  const eventDetail = () => {
    // let date = Date.parse(selectedEvent.start_time)
    // date = date.getDate()
    // date.format("m/dd/yy")
    if (selectedEvent) {

      let date = dateFormat(selectedEvent.start_time, "fullDate");
      return (
        <div className="my-5">
          { /*JSON.stringify(selectedEvent) */}
          <h4>Event Details</h4>
          <a href={"https://facebook.com/events/" + selectedEvent.id} target="_blank"><h5>{selectedEvent.name}</h5></a>
          <p>
            To be held on <strong> {date} </strong> at{" "}
            <strong>{selectedEvent.place.name}</strong>.
          </p>

          <p>
            <small>{selectedEvent.description}</small>
          </p>
        </div>
      );
    }
  };

  const formatDate = date => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  };

  //SEND TO EMAIL
  const handleInput = detail => event => {
    let index = event.target.value;


    if(detail=="event"){
      let eventData = fbEvents[index];
      console.log(eventData)

      setSelectedEvent(eventData)
      setRegDetails({
        ...regDetails,
        [detail]: eventData["name"],
        ["eventurl"]: "https://facebook.com/events/" + eventData["id"]
      });

    }else{
      setRegDetails({
        ...regDetails,
        [detail]: event.target.value
      });

    }

    console.log(regDetails)

  };

  const sendMail = e => {
    e.preventDefault();
    hasLoaded(false);

    let template_params = {
      ...regDetails,
      success: false
    };

    const service_id = "default_service";
    const template_id = "pcia-event-registration";
    emailjs.send(service_id, template_id, template_params).then(
      function(response) {
        setRegDetails({
          event: "",
          companyname: "",
          companyaddress: "",
          attendeeorsponsor: "",
          attendeenum: "",
          attendeenames: "",
          contactname: "",
          mobile: "",
          email: "",
          ismember: false,
          success: true
        });
        console.log("SUCCESS!", response.status, response.text);
        hasLoaded(true)
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
  };
  const showSuccess = () => {
    if (regDetails.success) {
      return (
        <div class="alert alert-success" role="alert">
          Your registration is sent. We'll get back to you shortly.
        </div>
      );
    }
  };

  useEffect(() => {
    getEvents();
    emailjs.init("user_7y7r2rpBGQqcTRR11zJWb");
  }, []);

  return (
    <Template
      header={{
        title: "Events",
        sub: "Reserve a slot for you or your team",
        children: headerContent()
      }}
    >
      <form action="" onSubmit={sendMail}>
        <div
          className="container bg-light zindex-dropdown p-5 mb-5"
          style={{
            marginTop: "-12rem"
          }}
        >
          <div className="row">
            <div className="offset-sm-2 col-sm-8 text-center p-3">
              <h3 className="mb-5">Which event are you interested in?</h3>
              <div className="form-group">
                <h4>Choose Upcoming Event/s</h4>

                <select
                  className="form-control p-3"
                  id="chooseEvent"
                  // onChange={handleEventChange}
                  onChange={handleInput("event")}
                >
                <option selected>...</option>


                  {fbEvents.map((event, index) => {

                    let today = new Date();
                    let eventDate = Date.parse(event.start_time);
                    // CODE FOR LAUNCH
                    // if( eventDate > today ){
                    //
                    //   return(
                    //       <option value={index}>{event.name}</option>
                    //   )
                    // }

                    return <option value={index}>{event.name}</option>;
                  })
                }
                </select>

                {eventDetail()}

              </div>{" "}
            </div>
          </div>
        </div>

        <div className="container p-5">

          <div className="row mb-5">
            <h3>More About You</h3>
            {/* <p>{return regDetails}</p> */}
            <div className="col-sm-12">
              <h4>Your Team / Company</h4>
            </div>
            <div className="col-sm-6">
              <span>Company Details</span>
              <input
                type="text"
                className="form-control"
                placeholder="Your Company Name"
                onChange={handleInput("companyname")}
                value={regDetails.companyname}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Your Company Address"
                onChange={handleInput("companyaddress")}
                value={regDetails.companyaddress}
              />
              <div className="form-group mt-4">
                <span>Your team will be participating as:</span>
                <select
                  className="form-control"
                  onChange={handleInput("attendeeorsponsor")}
                  // value={regDetails.attendeeorsponsor}
                >
                  <option value="Attendee AND Sponsor" selected>Attendee AND Sponsor</option>
                  <option value="Attendee only">Attendee only</option>
                  <option value="Sponsor only">Sponsor only</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <span>Number of attendees</span>
                <input
                  type="text"
                  className="form-control col-12 col-md-6 mb-2"
                  onChange={handleInput("attendeenum")}
                  value={regDetails.attendeenum}
                />
                <textarea
                  className="form-control"
                  placeholder="List of attendees (optional)"
                  rows="3"
                  onChange={handleInput("attendeenames")}
                  value={regDetails.attendeenames}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12">
              <h4>About You</h4>
            </div>
            <input
              type="text"
              className="form-control col-md-6 mx-1"
              placeholder="Full Name of Contact Person"
              onChange={handleInput("contactname")}
              value={regDetails.contactname}
            />
            <input
              type="email"
              className="form-control col-md-3 mx-1"
              placeholder="Email"
              onChange={handleInput("email")}
              value={regDetails.email}
            />
            <input
              type="telephone"
              className="form-control col-md-2 mx-1"
              placeholder="Mobile"
              onChange={handleInput("mobile")}
              value={regDetails.mobile}
            />
            <div className="form-check form-check-inline col-sm-6 my-2 mx-1">
              <input
                className="form-check-input"
                type="checkbox"
                // name="inlineRadioOptions"
                // id="inlineRadio1"
                // value="option1"
                onChange={handleInput("ismember")}
                value={regDetails.ismember}
              />
              <label className="form-check-label">
                I am already a PCIA Member
              </label>
            </div>

          </div>

          <div className="row bg-light p-5">
            <div className="col-sm-12">
              <h3>Confirm your reservation</h3>
              <h4>Payment</h4>
              <p>
                Deposit your registration or sponsorship fee to any China Bank
                Branch. Details as follows:
              </p>

              <div className="bg-white p-5 my-3 text-left">
                <strong>Account Name:</strong> Philippine Conrete Industry
                Association <br />
                <strong>Account Number:</strong> 219-010401-8 <br />
                <strong>Bank Name:</strong> China Bank Corporation <br />
                <strong>Bank Address:</strong> Mandaluyong - Pioneer Branch
                Globe Telecom Palaza Tower 1, Pioneer St, Mandaluyong City
              </div>

              <div className="text-center">
                <p className="mx-5">
                  <em className="text-red">
                    Don’t forget to email us the copy of deposit slip made for
                    this payment so we can issue necessary official receipts.
                  </em>
                </p>
                {checkbox(
                  "I have read and understood the  payment instructions"
                )}
                {/* {checkbox("I have a copy of deposit slip that I can attach right now")} */}

                <button
                  type="submit"
                  className="btn btn-lg btn-primary py-4 px-5 m-5"
                >
                  {" "}
                  Reserve Your Slot
                </button>
                <div>
                  { showLoader(loaded) }
                  {showSuccess()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};

export default Events;
