import React, { useEffect } from 'react'
import Header from './header.js';
import Job from './job.js';
import './jobs.css';
import { useState } from 'react';

const Jobs = ({joblists}) => {
  const [filteredwords, setfilteredwords ] = useState([]);;
  const [jobfilter, setJobfilter] = useState([]);
  const [jobs , setJoblists]= useState([])
  const addfilteredwords= (data)=>{
    if(!filteredwords.includes(data)){
      setfilteredwords([...filteredwords, data])
      console.log(data);
    }
    
  }
  const modifieddata = ()=>{
    if(filteredwords.length> 0){
      const newdata = jobs.filter(d=>{
        return filteredwords.every(key=>{
          return(
            d.role == key || d.level == key || d.languages.includes(key) || d.tools.includes(key)
          )
        })
      });
      setJoblists(newdata)

    }
    else{
      setJoblists(joblists);

    }

  }
  useEffect(()=>{
    modifieddata();
  }, [filteredwords]);

  const deletekeyword = (data)=>{
    const newkeywords = filteredwords.filter(key => key != data)
    setfilteredwords(newkeywords);
  }

  return (

   <> 
   <div className='ss'>
     <h1 style={{padding:'20px'}}>Job Vacancies</h1>
     <div className='headers'>
       {filteredwords.length > 0 && <Header keyword={filteredwords} removekeyword={deletekeyword}/>}
     </div>
   
   <div className='jobss'>
     
   
    <div>
     { jobs.map((job)=>{
return <Job job={job} key={job.id} setkeywords={addfilteredwords}/>
     })
     }
     </div>
     </div>
     </div>
     </>
  )
}

export default Jobs