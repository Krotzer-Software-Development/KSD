import React from 'react';
import PortPic from '../Assets/PortfolioPic.png';
function About() {
  return (
    <div className="About">
    
    <div>
  
    <h1>About me</h1>
    
     <div id="blockStyle">
    <p className="about-paragraph">
    <img className="port-pic-container" src={PortPic} />
   
    My Myers Briggs personality test indicates I am an INTJ-A, The Architect. 
    <br />
    <br />
    Besides being a motivated self-starter that enjoys all things tech. 
    I work well with others, quick to learn new things, multitasker, reliable and most of all I am great at solving problems. 
    <br />
    Let me help you solve your tech related problems today!
        </p>
        </div>
    </div>
    </div>
  );
}

export default About;