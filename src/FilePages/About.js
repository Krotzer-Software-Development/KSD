import React from 'react';
import Card from './Card';
import {Row, Col, Container} from 'react-bootstrap';
import PortPic from '../Assets/pp.png';
function ExampleRates () {
  return (
    <div className="PageContainer">
    <div className="Page">     
    <h1> About </h1>
    <div className="Intro">
      <div id="PageContent">

  
   
      <Row>
        <Col>
        <img className="port-pic-container" src={PortPic}/>
        </Col>
        <Col>
        My Myers Briggs personality test indicates I am an INTJ-A, The Architect. 
        Besides being a motivated self-starter that enjoys all things tech. 
    I work well with others, quick to learn new things, multitasker, reliable and most of all I am great at solving problems. 
    Let me help you solve your tech related problems today.
    </Col>
    </Row>
    </div>
        
     
    </div>
    
    <div id="PageContent"> Pricing Examples - More Examples are uploading </div>
    <div className="PageBodyAbout">
    
   <Card />


    </div>
    </div>
    </div>
  );
}

export default ExampleRates;