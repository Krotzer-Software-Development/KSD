import React from 'react';
import './FilePages/Styles.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import HomePage from './FilePages/HomePage';
import ExampleRates from './FilePages/ExampleRates';
import Contact from './FilePages/Contact';
import Deposits from './FilePages/PaymentPage';
import Portfolio from './FilePages/Portfolio';
import {BrowserRouter, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
    <div className="NaviStyle">
    <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><Link to="/Homepage"> KSD </Link>  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/Contact"> Contact </Link></Nav.Link>
      <Nav.Link><Link to="/PaymentPage"> Deposits </Link></Nav.Link>
      <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.homeraisedcairns.com/"> Home Raised Cairns - AKC Puppies</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item> <Link to="/ExampleRates"> Examples and App Pricing </Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://github.com/KrotzerSoftwareDevelopment/"> GitHub </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="https://www.linkedin.com/in/dean-krotzer-0800b11a2/">
        LinkedIn
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <div className="grid-container">
<main className="main">
    <div className="content">
    <Route path="/HomePage" exact={true} component={HomePage} />
    <Route path="/PaymentPage" component={Deposits} />
    <Route path="/Contact" component={Contact} />
    <Route path="/ExampleRates" component={ExampleRates} />
    <Route path="/Portfolio" component={Portfolio} />
</div>
    <HomePage />
</main>
</div>
</BrowserRouter>
</div>
</div>
  );
}

export default App;
