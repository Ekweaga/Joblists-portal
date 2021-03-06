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
import {BsEnvelope} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {FcClock} from 'react-icons/fc'


const Home = ({joblists}) => {
  const [jobs, setJobs] = useState(joblists)

  useEffect(()=>{
    Aos.init({duration:1000});
     
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
                    <button><Link to='jobs'>Find Jobs{FcClock}</Link></button>
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
            <h1>Meet Our Employees</h1>
                <div className='agencies'>
                 
                   
               <div data-aos="fade-in"><span>UI/UX DESIGNER</span> <img src={man1}   /></div>
                <div data-aos="fade-in">  <span>DIGITAL MARKETER</span>  <img src={man2}  /></div>
                   <div data-aos="fade-in"> <span>FLUTTER DEVELOPER</span><img src={man5} /></div>
                  <div data-aos="fade-in"> <span>FULL-STACK DEVELOPER</span> <img src={man3}  /></div>
                   
                </div>
           
            </div>
<br/>

                <div>
                    <div style={{margin:'80px'}}><h1 style={{fontSize:'25px'}}>Our Current Open Positions </h1>
                    <p style={{marginBottom:'60px'}}>Hiring ongoing for below opportunities </p>
                    <div className='jobs'>
                        <div >
                            {jobs.slice(0,6).map((job)=>{
                                return (<><div className='jobslist'><div style={{marginLeft:'0px'}}>
                                    <h1 style={{fontSize:'18px',marginBottom:'10px',marginLeft:'0px'}}>{job.position}</h1>
                                    <div><FcClock />{job.postedat} &nbsp;
                                        <GoLocation />{job.location}&nbsp;&nbsp;&nbsp;
                                        <span style={{color:'orangered'}}>{job.contract}</span>
                                    </div>
                                </div><div> <button style={{borderRadius:'10px', width:'200px',padding:'10px',background:'blue'}}><Link to={`/apply/${job.id}`}>Apply Now</Link></button></div></div></>)
                            })}
                        </div>
                    </div>
                    
                    </div>

                        </div>
        
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
  <p>Upload your CV & apply to jobs in a single click</p></div>
   <button><Link to='jobs'>Get a Job</Link></button>
</div>






    </div>
  )
}

export default Home;