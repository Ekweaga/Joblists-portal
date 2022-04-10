import React, { useEffect, useState } from 'react'
import './home.css'
import qq from './qq.jpeg';
import css from './css.png';
import html from './react.png';
import js from './js.png';
import fire from './angular.png';
import man1 from './man1.jpeg';
import man2 from './man2.jpeg';
import man3 from './man3.jpeg';
import man4 from './man4.jpeg';
import man5 from './man5.jpeg';
import Data from './data.json'
import Footer from './footer';
import {Link} from 'react-router-dom';
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p4 from './p4.jpeg'
import p5 from './p5.jpeg'
import p6 from './p6.jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Home = ({joblists}) => {
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    Aos.init({duration:1000});
      setJobs(joblists)
  },[])
    
  return (
    <div className='App'>
        <div className='top'>
            <div className='header'>
                <div>
                    <h1>
                        Find Your Perfect Tech Job Match
                    </h1>
                    <p>Find jobs, Employment and Career Opportunities</p><br/>
                    <button><Link to='jobs'>Find Jobs</Link></button>
                </div>
                <div className='img'>
                    <img src={man5}/>
                    <img src={css} style={{width:'50px', height:'50px'}} className='img1'/>
                    <img src={html}style={{width:'50px',height:'50px'}} className='img2'/>
                    <img src={js}style={{width:'50px',height:'50px'}} className='img3'/>
                    <img src={fire}style={{width:'50px',height:'50px'}} className='img4'/>
                </div>
            </div>
            <div className='employee' >
                <h3>100+ Employees</h3><br/>
                <div className='employes'>
                <img src={man1} style={{width:'40px', height:'40px',borderRadius:'50%',marginLeft:'-7px'}} />
                    <img src={man2}style={{width:'40px',height:'40px',borderRadius:'50%',marginLeft:'-7px'}} />
                  
                    <img src={man3}style={{width:'40px',height:'40px',borderRadius:'50%',marginLeft:'-7px'}} />
                    <img src={man4}style={{width:'40px',height:'40px',borderRadius:'50%',marginLeft:'-7px'}}/>&nbsp;...
                    
                </div>
                <div>
                    <span></span>
                </div>


            </div>
            
        </div>
            <div className='about' >
            <div className='abouts' style={{width:'80%', margin:'auto'}}>
                <h1>About Us</h1>
                <p>An employment agency which matches employers to employees. JobHunt we operate public, federal, state
                    . The positions offered are often temporary, contact, intern based and sometimes full time jobs. We keep track of employees who apply for
                    a job post, skills and work history. This helps them match employees to new assignmnets. Many sectors outsources their rectruiting to employment agencies
                    . We also offer both the employers and employess flexibility that more permanent work arrangements do not.
                </p>
                </div>
                <div className='agencies'>
                    <br/>
                    <h1>Meet Our Employees</h1>
                <img src={man1}   data-aos="fade-in"/>
                    <img src={man2}  data-aos="fade-in"/>
                    <img src={man5}  data-aos="fade-in"/>
                    <img src={man3}  data-aos="fade-in"/>
                    <img src={man4} data-aos="fade-in"/>
                </div>
           
            </div>
<br/>
        
        <div className='processes'>
            <h2>
              Our Process
            </h2>
            <div className='process'>
                    <div data-aos="fade-in">
                        <section><b>1</b></section>
                        <b>Free Resume Assessments</b><br/>
                        <p>Employers at average spend 60 secs scanning resumes of potential workers</p>
                    </div>
                    <div data-aos="fade-in">
                    <section><b>2</b></section>
                        <b>Job Fit Scoring</b><br/>
                        <p>Our new fit scorer show you relevant jobs that fit your skills and interest</p>
                    </div>
                    <div data-aos="fade-in">
                    <section><b>3</b></section>
                        <b>Help Every step of the day</b><br/>
                        <p>Our career dvice section is full of information to help you identify the right fit</p>
                    </div>
            </div>
        </div>
       
     

<div className='cities'>
    <h1>Featured Places</h1>
    <p>Jobs are located in the following areas</p>
    <div class='city'>
    <div className='p'>
 <img src={p5} style={{height:'550px'}} data-aos="zoom-in"/>     
 <span>Nigeria, Lagos</span>
        </div>
        <div>
            <div className='p'data-aos="fade-in">
            <img src={p1}/>
            <span>Nigeria, Abuja</span>
            </div>
            <div className='p'data-aos="zoom-in">
            <img src={p2}/>
            <span>Nigeria, Calabar</span>
            </div>
            <div className='p'>
            <img src={p3}/>
            <span>Nigeria, Jos</span>
            </div>
            <div className='p' data-aos="slide-left">
            <img src={p4}/>
            <span>Nigeria, Edo</span>
            </div>
       
        </div>
       
       
       
      
    </div>


</div>
<div className='search' data-aos="zoom-in">
  <div><b>  Let employers find you </b>
  <p>Navigate to our jobs list page and find your skill sets and interest</p></div>
   <button><Link to='jobs'>Get a Job</Link></button>
</div>






    </div>
  )
}

export default Home;