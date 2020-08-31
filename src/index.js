import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Consult from './FilePages/Consult';
import About from './FilePages/About';
import Contact from './FilePages/Contact';
import Portfolio from './FilePages/Portfolio';
import * as serviceWorker from './serviceWorker';
import { Route, Switch } from 'react-router-dom';
import Homepage from './FilePages/HomePage.js';
import Navigation from './FilePages/Navigation';
import Footer from './FilePages/Footer.js';
ReactDOM.render(
    <div className="wholeContainer">
    
    
    <BrowserRouter>
    
    <App />
    <Switch>
    <Route path="/HomePage" component={Homepage}/>
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Consult" component={Consult} />
    <Route path="/Portfolio" component={Portfolio} />
</Switch>
<Navigation />
<Footer />
    </BrowserRouter>
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
