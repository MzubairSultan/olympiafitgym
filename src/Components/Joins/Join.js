import React from 'react'
import './Join.css';
import { useRef } from 'react';
//import emailjs from '@emailjs/browser'
import emailjs from 'emailjs-com';

function Join() {
   const form = useRef();
   const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_mios8ls', 'template_o73rdhm', e.target ,'3z_Wu3FofpDpgAQrt')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

   }
  return (
   <div className="join" id="join_us">
    <div className="left_join">
        <hr />
       <div>
         <span className='stroke_text'>READY TO</span>
         <span> LEVEL UP</span>
       </div>

       <div>
         <span>YOUR BODY</span>
         <span className='stroke_text'> WITH US?</span>
       </div>
    </div>
    <div className="right_join">
       <form ref={form} className="email_container" onSubmit={sendEmail}>
        <input type="email" name="user_email" id="" placeholder='Enter your Email' />
        <button className='btn_join_now'>Join Now</button>
       </form>
    </div>

   </div>
  )
}

export default Join
