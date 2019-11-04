import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Template from '../template'
import emailjs from 'emailjs-com';


const ContactUs = ( ) => {
  const [msgDetail, setMsgDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    success: false
  });

  useEffect(()=>{
    emailjs.init("user_7y7r2rpBGQqcTRR11zJWb");
  },[])

  const handleChange = detail => event =>{
    setMsgDetail({
      ...msgDetail,
      [detail]: event.target.value
    })
  }

  const headerContent = () =>(
    <Fragment>
      <div className="container text-white text-center">
        <h5>Feel free to contact Tin Escario or Julie Ong</h5>
        <p>
          Phone: 636414 to 24 ;
          Fax: 916-3658 / 916-3740
        </p>
      </div>
      <div className="minheight-20rem">&nbsp;</div>
    </Fragment>
  )


  const sendMail = (e) =>{
  e.preventDefault();

  let template_params = {
    "name": msgDetail.name,
   "email": msgDetail.email,
   "mobile": msgDetail.mobile,
   "message": msgDetail.message
    }

    const service_id = "default_service";
    const template_id = "template_S4yYHxy0_clone";
    emailjs.send(service_id, template_id, template_params)
        .then(function(response) {
          setMsgDetail({
            name: "",
            email: "",
            mobile: "",
            message: "",
            success: true
          })
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

  }
  const showSuccess = () =>{
    if(msgDetail.success){
      return(  <div class="alert alert-success" role="alert">
        Your email is sent. We'll get back to you shortly.
      </div>)
    }

  }







  return (
  <Template
    header={{
      title: "Contact Us",
      sub: "Email us at contact@philconcrete.com",
      children: headerContent(),
    }}
    >

      <div className="container bg-light zindex-dropdown p-5 mb-5" style={{
        marginTop: "-24rem",
      }}>
      <div className="minheight-2rem">&nbsp;</div>
      <div className="row">
        <div className="col-12">
          <h3 className="mb-5">Send us a message</h3>
        </div>
        {showSuccess()}

        <div className="col-12 container">
          <form onSubmit = {sendMail}>
          <div className="row form-row">
            <div className="form-group col-md-4">
              <label for="">Full Name</label>
              <input type="text" className="form-control" value={msgDetail.name} placeholder="Firstname Surname" onChange={handleChange('name')}/>
            </div>
           <div className="form-group col-md-4">
             <label for="">Email</label>
             <input type="email"
               className="form-control"
               value={msgDetail.email}
               onChange={handleChange('email')}
                placeholder="name@mail.com"/>
           </div>
           <div className="form-group col-md-4">
             <label for="">Mobile</label>
             <input
               type="telephone"
               className="form-control"
               value={msgDetail.mobile}
               onChange={handleChange('mobile')}
               placeholder="+63 9## #### #### "/>
           </div>

            <div className="form-group col-md-12">
               <label for="">Your Message</label>
               <textarea
                 className="form-control" onChange={handleChange('message')} rows="6"
                 value={msgDetail.message}
                 placeholder="I would like to inquire about... "
               />
           </div>

           <div className="offset-md-4 col-md-4">
             <button type="submit" className="btn btn-primary btn-block p-3">Send Message</button>
           </div>
         </div>
         </form>

        </div>


      </div>
      <div className="minheight-2rem">&nbsp;</div>

      </div>
      <div className="bg-white">
            <div className="minheight-6rem">&nbsp;</div>
      </div>



  </Template>
)}

export default ContactUs;
