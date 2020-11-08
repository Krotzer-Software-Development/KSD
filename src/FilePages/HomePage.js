import React from 'react';
import '../FilePages/Styles.css';
function HomePage() {
  return (
    <div className="PageContainer">
      <div className="Page" >
        <h1> Web & Mobile App Developer </h1>
            <div className="Intro">
            <div id="Title"></div>
          
            </div>

            <div className="PageBody">

              <div id="PageContent">
                 <li id="SubTitle"> Web Development </li>
                 <br />
                 <li> Exisiting Web Site Modifications </li>
                 <li> React Native Apps </li>
                 <li> New Website Creation </li>
                 <li>Troubleshooting</li>
                 <li>Debuging</li>
                 <li>Search Engine Optimization (SEO)</li>
                 <br />
                 <li>Hearing impaired and disablity friendly can be implemented upon request.</li>
                 <li>And Much more!</li>
                 </div>

              <div id="PageContent">
                <li id="SubTitle">Android Apps</li>
                <br />
                <li>Android Phone and Tablet Apps</li>
                <li>Wear Os</li>
                <li>Tv Os</li>
                <li>Automotive</li>
                <li>Cross-platform</li>
                </div>

              <div id="PageContent">
                <li id="SubTitle">Apple Apps</li>
                <br />
                <li>Iphone Ios</li>
                <li>Mac Os</li>
                <li>Apple Watch Os</li>
                <li>Tv Os</li>
                <li>Cross-platform</li>
                </div>
                
            </div>
      </div>
      </div>

  );
}


export default HomePage;