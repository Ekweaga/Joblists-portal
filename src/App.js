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
    salary:"500k/month",
    level:"Senior",
    languages:["HTML","CSS"],
    role:"web  ",
    position:" Front-end developer",
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
    salary:"100k/month",
    level:"Junior",
    languages:["HTML","Node"],
    role:" Fullstack ",
    position:" Full-stack developer",
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
    salary:"500k/month",
    level:"Senior",
    languages:["ADOBE"],
    role:" Designer",
    position:" Product Designer",
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
    salary:"150k/month",
    level:"Junior",
    languages:["PHP"],
    role:"Entry ",
    position:" Junior developer",
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
    contract:"Internship",
    salary:"50k/month",
    level:"junior",
    languages:["FIGMA"],
    role:"UI/UX ",
    position:" UI/UX designer",
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
    salary:"800k/month",
    level:"Senior",
    languages:["REACTJS"],
    role:"Frontend",
    position:" Front-end developer",
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
    salary:"800k/month",
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
    salary:"500k/month",
    level:"Proficient",
    languages:["HTML","CSS"],
    role:"Back-end",
    position:"  Back-end developer",
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
    salary:"60k/month",
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
    salary:"120k/month",
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
    salary:"400k/month",
    level:"Senior",
    languages:["HTML","CSS"],
    role:"Frontend ",
    position:"WordPress developer",
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
    salary:"900k/month",
    level:"Senior",
    languages:["PHP","NODEJS"],
    role:"Backend",
    position:" Back-end developer",
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
    salary:"50k/month",
    level:"Entry",
    languages:["C#"],
    role:"Backend",
    position:" Intern developer",
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
    salary:"1M/month",
    level:"Senior",
    languages:["HTML"],
    role:"Frontend",
    position:"Angular developer",
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
    salary:"500k/month",
    level:"Senior",
    languages:["SEO","ADS"],
    role:" marketer",
    position:" Digital Marketer",
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
    salary:"90k/month",
    level:"Junior",
    languages:["NODEJS"],
    role:"Backend",
    position:"  Junior developer",
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
    salary:"90k/month",
    level:"Junior",
    languages:["FIGMA"],
    role:"Designer",
    position:"Graphics Designer",
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
    salary:"600k/month",
    level:"Senior",
    languages:["SEO","MEDIA"],
    role:"media ",
    position:" SEO manager",
    postedat:"1 day ago",
    featured:true,
    new:true,
    location:"Lagos",
    tools:["SEO"],
    exp:"2 years",  des:"Developing new user-facing features and also ensure the technical feasibility of UI/Ux enginners.Advanced understanding of HTML,JS, CSS, Less. Able to meet up with deadlines under tight situations"
  },
  {
    id:19,
    contract:"Full Time",
    salary:"150k/month",
    level:"Junior",
    languages:["JS"],
    role:"Web",
    position:"React developer",
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
    salary:"200k/month",
    level:"Junior",
    languages:["FLUTTER"],
    role:"Andriod ",
    position:"Flutter developer",
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
    salary:"1M/month",
    level:"Senior",
    languages:["JAVA"],
    role:"Mobile ",
    position:"Mobile Developer",
    postedat:"15h ago",
    featured:true,
    new:true,
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
      <div className='footer'> <Footer/></div>
      </BrowserRouter>
    
   
    </div>
  </> 
  );
}

export default App;
