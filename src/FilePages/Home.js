import React from 'react';
import '../FilePages/Styles.css';
import {Row, Col, Container} from 'react-bootstrap';
function Home() {
  return (
    <div className="PageContainer">
      <div className="Page" >
        <h1> Web & Mobile App Developer </h1>
            <div className="Intro">
            <div id="Title"></div>
            </div>
            <div className="PageBody">
              <Container>
            <Row>
              <Col>
              <div id="PageContent">
                
                 <li id="SubTitle"> Web Development </li>
                 <li> Exisiting Web Site Modifications </li>
               <li>Cross-platform Mobile Apps</li> 
                 <li> New Website Creation </li>
                 <li>Debuging</li>
                 <li>Search Engine Optimization </li>
                 <li>Disabiliy friendly</li>
                 <li>And Much more!</li>
                 </div>
                 </Col>
                 <Col>
              <div id="PageContent">
                <li id="SubTitle">Android Apps</li>
                <li>Android Phone and Tablet Apps</li>
                <li>Wearables</li>
                <li>Tv app</li>
                <li>Automotive apps</li>
                
                </div>
                </Col>
                <Col>
                
              <div id="PageContent">
                <li id="SubTitle">Apple Apps</li>
                <li>Iphone </li>
                <li>Mac </li>
                <li>Apple Watch </li>
                <li>Tv </li>
                </div>
                </Col>
                </Row>
                </Container>
            </div>
      </div>
      </div>

  );
}


export default Home;