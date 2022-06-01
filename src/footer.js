import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      
<div>
  <h1><span>J</span>obHunt</h1>
  <p>Find your perfect Tech Jobs</p>
</div>
<div className='find'>
<ul>
  <li><Link to="/">Home</Link></li>
    <li><Link to="/jobs">Job Links</Link></li>
    <li>See Employees</li>
   
  </ul>
</div>
<div>
  <b>Send A Message : </b>hikay133@gmail.com
  
</div>
    </div>
  )
}

export default Footer;