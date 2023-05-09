import React from 'react';
const img = "../images/profile-picture.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
    
      <img src={img} className="profile-picture" alt="img" variant="top" style= {{width:200, height:200}}/> 
    
      <p>
        My name is Stephen Moore. I'm currently working at MotivHealth Insurance as a Junior QA Tester, <br></br> 
        and taking the University of Utah Fullstack Coding Bootcamp. A few years ago I decided to take <br></br>
        a Web Development class and started to gain a stronger interest in becoming a Web Developer. <br></br>
        Shortly after I had a few challenges that made me take a step back from continuing my education. <br></br> 
        I'm excited to gain more knowledge of coding and to watch the things I build come together as <br></br>
        something amazing for others to see and use in their lives.
      </p>
    </div>
  );
}