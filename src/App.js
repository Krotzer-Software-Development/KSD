import React, { useState } from 'react';
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Home from './FilePages/Home';
import './FilePages/Styles.css';
import Contact from './FilePages/Contact';
import Deposit from './FilePages/Deposit';
import About from './FilePages/About';
import { BrowserRouter as  Router, Route, Link, NavLink } from 'react-router-dom';

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/Contact', name: 'Contact', Component: Contact },
    { path: '/Deposit', name: 'Deposit', Component: Deposit },
    { path: '/About', name: 'About', Component: About },
  ]
function App () {
    const [expanded, setExpanded] = useState(false);
  return (
      <div>
    
    <Navbar  fixed="top" collapseOnSelect expand="lg"expanded={expanded} bg="dark" variant="dark">
    <Navbar.Brand > KSD </Navbar.Brand>
    <Navbar.Toggle  onClick={() => setExpanded(expanded ? false : "expanded")} />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto"  >
            {routes.map(route => (
            
              <Nav.Link
              onClick={() => setExpanded(false)}

                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName="active"
                exact
                
              >
                
                {route.name}
                
              </Nav.Link>
            ))}
            
            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://www.homeraisedcairns.com/"> Home Raised Cairns - AKC Puppies</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://github.com/KrotzerSoftwareDevelopment/"> GitHub </NavDropdown.Item>
      </NavDropdown>
          </Nav>
   
    <Nav>
    <NavDropdown.Divider />
      <Nav.Link eventKey={2} href="https://www.linkedin.com/in/dean-krotzer-0800b11a2/">
        LinkedIn
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Navbar>
<div className="containertwo">
<Container className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                
                  in={match != null}
                  
                  
                  
                  unmountOnExit
                >
                 
                    <Component />
                  
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
        </div>
</div>
  );
}

export default App;