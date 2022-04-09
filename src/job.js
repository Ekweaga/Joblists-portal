import React from 'react'
import './job.css';
import { Link } from 'react-router-dom';

const Job = ({job,setkeywords}) => {
  let keywords = [job.role,job.level, ...job.languages, ...job.tools];
  
  return (
   
    <>
    <div className='jobe'>
    <div className='jobes'>
      <div>
        {job.new&&<span style={{background:'green', color:'white',padding:'8px',width:'40px',borderRadius:'50px',fontSize:'12px'}}>NEW!</span>}&nbsp;
        {job.featured&&<span style={{background:'orangered', color:'white',padding:'8px',width:'40px',borderRadius:'50px',fontSize:'12px'}}>FEATURED!</span>}
     <br/>
      <h2>{job.position}</h2>
    
      <span>{job.postedat} - {job.contract} </span><br/>
      <span>Location :   {job.location}</span>  <br/>
      <span>Salary : {job.salary}</span>  
     </div>
     
      <div className='btn'>
        {keywords.map((key,id)=>{
      return <button key={id}  onClick={()=>setkeywords(key)}>{key}</button>
        })}
      </div>
      <button><Link to={`/apply/${job.id}`}>Apply Now</Link></button>
     
    </div>
   
    </div>
     </>
  )
}

export default Job;