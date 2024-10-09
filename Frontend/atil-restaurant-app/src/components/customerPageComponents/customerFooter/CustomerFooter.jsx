import React from 'react'
import './CustomerFooter.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function CustomerFooter() {
  return (
    <div className='custFooter'>

<div className="leftInfo">
  <p className='paddingStyle'>We’re more than happy to have you on board! Join us for great food and fun domain.</p>
 <span className='paddingStyle'>Follow us :  <FaFacebook /> <FaInstagramSquare /> </span>

</div>
<div className="addressInfo">
  <h3 className='paddingStyle'>ADDRESS</h3>
  <p > <FaLocationDot />  78456 Ram Nagar,4th block,Hyderabad - 46893</p>
<p><FaPhone />   +91 78452986067</p>
<p><MdEmail />   atil@cuisine.com</p>
</div>


<div className="hours">
  <h3 className='paddingStyle'>HOURS</h3>
  <p>Tuesday - closed</p>
  <p>Monday-Sunday (11:00AM-2:00AM | 5:00PM-10:00PM)</p>
</div>

    </div>
  )
}

export default CustomerFooter