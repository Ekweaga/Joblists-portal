import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Jobs from './Jobs.js'
import Footer from './footer';
import {BrowserRouter} from 'react-router-dom';
import Router from './router';
import { useState } from 'react';

function App() {
  
  const joblists = 
  [
  {
    id:1,
    contract:"Full Time",
    level:"Senior",
    languages:["HTML","CSS"],
    role:"Frontend ",
    position:" developer",
    postedat:"5h ago",
    featured:true,
    location:"Lagos",
    new: true,
    tools:[ "JS"],
    exp:"5 years",
    des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:2,
    contract:"Internship",
    level:"Junior",
    languages:["HTML","Node"],
    role:" Fullstack ",
    position:" developer",
    postedat:"20h ago",
    featured:true,
    location:"Lagos",
    new:true,
    tools:["Python"],
    exp:"2 years",
    des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:3,
    contract:"Full Time",
    level:"Senior",
    languages:["ADOBE"],
    role:"Product",
    position:" Designer",
    postedat:"1d ago",
    featured:true,
    location:"Abuja",
    new:false,
    tools:[ "Figma"],
    exp:"4 years",
    des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"

  },
  {
    id:4,
    contract:"Full Time",
    level:"Junior",
    languages:["PHP"],
    role:"Entry ",
    position:" developer",
    postedat:" 2d ago",
    featured:false,
    new:true,
    location:"Edo",
    tools:[ "JS"],
    des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations",
    exp:"2 years"
  },
  {
    id:5,
    contract:"Intrenship",
    level:"junior",
    languages:["FIGMA"],
    role:"UI/UX ",
    position:" designer",
    postedat:"23h ago",
    featured:true,
    location:"Lagos",
    new:false,
    tools:["Figma"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:6,
    contract:"Full Time",
    level:"Senior",
    languages:["REACTJS"],
    role:"Frontend",
    position:" developer",
    postedat:"3d ago",
    featured:true,
    location:"Ibadan",
    new:true,
    tools:[ "Reactjs"],
    exp:"6 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:7,
    contract:"Full Time",
    level:"Senior",
    languages:["FLUTTER"],
    role:"Mobiledevs",
    position:" java developer",
    postedat:"1 day ago",
    featured:true,
    location:"Ondo",
    new:true,
    tools:["Flutter"],
    exp:"4 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:8,
    contract:"Full Time",
    level:"Proficient",
    languages:["HTML","CSS"],
    role:"Frontend",
    position:"  developer",
    postedat:"10h ago",
    featured:false,
    new:true,
    location:"Abuja",
    tools:[ "JS"],
    exp:"7 years",
    des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:9,
    contract:"Internship",
    level:"Entry",
    languages:["CI/CD"],
    role:"Devops devs",
    position:" cloud engineer",
    postedat:"1 day ago",
    featured:true,
    location:"Calabar",
    new:true,
    tools:["cloud"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:10,
    contract:"Full Time",
    level:"Junior",
    languages:["HTML"],
    role:"Web designer",
    position:"Web designer",
    postedat:"1 day ago",
    featured:true,
    location:"Lagos",
    new:false,
    tools:[ "JS"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:11,
    contract:"Full Time",
    level:"Senior",
    languages:["HTML","CSS"],
    role:"Frontend ",
    position:"developer",
    postedat:"1 day ago",
    featured:false,
    new:true,
    location:"Osun",
    tools:[ "JS"],
    exp:"5 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:12,
    contract:"Full Time",
    level:"Senior",
    languages:["PHP","NODEJS"],
    role:"Backend",
    position:" developer",
    postedat:"1 day ago",
    featured:false,
    location:"Akure",
    new:true,
    tools:[ "Python"],
    exp:"5 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:13,
    contract:"Internship",
    level:"Entry",
    languages:["C#"],
    role:"Backend",
    position:" developer",
    postedat:"1 day ago",
    featured:true,
    location:"Jos",
    new:true,
    tools:[ "C#"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:14,
    contract:"Contract",
    level:"Senior",
    languages:["HTML"],
    role:"Frontend",
    position:"front-end devs",
    postedat:"1 day ago",
    featured:true,
    new:true,
    location:"Imo",
    tools:[ "JS"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:15,
    contract:"Full Time",
    level:"Senior",
    languages:["SEO","ADS"],
    role:"Digital marketer",
    position:"Marketer",
    postedat:"1 day ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:["Social Media"],
    exp:"3 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:16,
    contract:"Full Time",
    level:"Junior",
    languages:["NODEJS"],
    role:"Backend",
    position:" developer",
    postedat:"5 hr ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:["Python"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:17,
    contract:"Internship",
    level:"Junior",
    languages:["FIGMA"],
    role:"Designer",
    position:"Designer",
    postedat:"1 day ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:["FIGMA"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:18,
    contract:"Full Time",
    level:"Senior",
    languages:["SEO","MEDIA"],
    role:"media ",
    position:" manager",
    postedat:"1 day ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:["SEO"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:19,
    contract:"Full Time",
    level:"Junior",
    languages:["JS"],
    role:"Frontend",
    position:"front-end devs",
    postedat:"2d ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:[ "CSS"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:20,
    contract:"Contract",
    level:"Junior",
    languages:["FLUTTER"],
    role:"Andriod ",
    position:"mobile devs",
    postedat:"5d ago",
    featured:true,
    new:false,
    location:"Lagos",
    tools:["JAVA"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:21,
    contract:"Full Time",
    level:"Senior",
    languages:["JAVA"],
    role:"Mobile ",
    position:"Mobile Devs",
    postedat:"15h ago",
    featured:true,
    new:false,
    location:"Lagos"
    ,
    tools:[ "Java"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  }

] 
  return (
   <><div className="App">
      <BrowserRouter>
      <Router joblists ={joblists}/>
      
      </BrowserRouter>
    
   
    </div>
    <div className='footer'> <Footer/></div></> 
  );
}

export default App;
