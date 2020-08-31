import React from 'react';
import '../FilePages/Styles.css';
import DesktopIcon from '../Assets/Icons/DesktopIcon.png';
import HomeIcon from '../Assets/Icons/HomeIcon.png';
import AboutIcon from '../Assets/Icons/AboutIcon.png';
import ContactIcon from '../Assets/Icons/ContactIcon.png';
import ConsultIcon from '../Assets/Icons/ConsultIcon.png';
import PortfolioIcon from '../Assets/Icons/PortfolioIcon.png';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className="navigation">
      <div className="naviContainer">
      <ul>
      <Link to="/"><li><img className="IconStyle" src={DesktopIcon}/>Desktop</li></Link>
      <Link to="/HomePage"><li><img className="IconStyle" src={HomeIcon}/>KSD</li></Link>
      <Link to="/About"><li><img className="IconStyle" src={AboutIcon}/>About</li></Link>
      <Link to="/Contact"><li><img className="IconStyle" src={ContactIcon}/>Contact</li></Link>
      <Link to="/Consult"><li><img className="IconStyle" src={ConsultIcon}/>Consult</li></Link>
      <Link to="/Portfolio"><li><img className="IconStyle" src={PortfolioIcon}/>Portfolio</li></Link>
      </ul>
      </div>
      </div>
  );
}

export default Navigation;