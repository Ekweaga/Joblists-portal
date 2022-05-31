import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './apply.css' 
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Apply = ({jobs}) => {
  const {id} = useParams()
  const [e, setJob]= useState({});
  const [file, setFile] = useState(null);
  let options = ["application/pdf"];
  const [input, setInput] = useState({
    name:'',
    email:'',
    exp:'',
    git:'',
    pot:'',
    stack:''
  })
  const handleinput = (e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
  }
  const submit = (e)=>{
    e.preventDefault();
    if( !file || !options.includes(file.type)){
      alertify.warning('Uploaded resume not in the right format, use Pdf'); 
      toast("Uploaded resume not in the right format, use Pdf");
      console.log(file);
    }
    
    else{
     
      alertify.success('Thanks for applying, we will get to you sonnest'); 
      toast("Thanks for applying, we will get to you sonnest");
      setInput({
       
        name:'',
        email:'',
        exp:'',
        git:'',
        pot:'',
        stack:''

      })
    }
    
  }
 
  
 useEffect(()=>{
  const onejob = jobs.find((job)=> job.id == id)
  setJob(onejob)
  console.log(e)
 },[id])
  
  return (
    <div>
       <div>
    
     </div>
     
            <div className='form'>
              <div className='det'>
              <h3 style={{marginTop:'20px'}}>{e.level} {e.role}</h3> 
              <span>{e.postedat}</span><br/>
              <span> Exp : {e.exp}</span><br/><br/>
            <p> {e.des}</p>
            <span style={{float:'left',marginTop:'10px'}}>Location : {e.location}</span>
            <span style={{float:'right',marginTop:'10px'}}>Contract : {e.contract}</span>
              </div>
          
                <form onSubmit={submit}>
                  <div>
                    Apply Now!!
                  </div>
                    <input type='text' placeholder='First Name' required onChange={handleinput} name="name"/>
                    <input type='text' placeholder='Last Name' required  onChange={handleinput} name="email"/>
                    <input type='email' placeholder='Email' required  onChange={handleinput}name="email"/>
                    <input type='text' placeholder='Your Experience' onChange={handleinput}name="exp"/>
                    <input type='text' placeholder='Portfolio website link' onChange={handleinput} name="pot" required/>
                    <input type='text' placeholder='Github link' onChange={handleinput}name="git" required/>
                    <input type='text' placeholder='Stack' onChange={handleinput} required/>
                    <div style={{marginBottom:'-20px'}}>
                      <div>CV/Resume should be in pdf forms</div>
                      <button style={{width:'250px'}}><label for="id">Upload Resume/Cv</label></button>  
                    <input type='file' placeholder='Upload Resume/CV' id="id" required onChange={(e)=>{setFile(e.target.files[0])}}/>
                    </div>
                   
                      <button type="submit" style={{width:'250px',background:'orangered'}}>Submit</button>
                    
                   
                </form>
            </div>

    </div>
  )
}

export default Apply;