import React, { Component } from 'react';
import './App.css';
import Homecry from './Homecry.js';
import Home from './Home.js';
import About from './About.js';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import AFLogo from './images/AFlogo.png';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <Router>
        <div class="nav-bar-logo">
          <Link class="nav-bar-link-logo" to="/">LOGO</Link>
          <div class="nav-bar-content">
            <span class="nav-bar-link-content"><NavLink exact={true}  to="/" >HOME</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/about">ABOUT</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/shop">SHOP</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/events">EVENTS</NavLink></span>
            <span class="nav-bar-link-content"> <NavLink to="/sponsors">SPONSORS</NavLink></span>
            <span class="nav-bar-icons">
              <SiInstagram class="nav-bar-social" /> <GrFacebookOption class="nav-bar-social" /> <GrSpotify class="nav-bar-social" /> <SiTiktok class="nav-bar-social" />
            </span>
          </div>
        </div>


        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>        
        <Route path="/shop" component={Homecry}/>        
        <Route path="/events" component={Homecry}/>        
        <Route path="/sponsors" component={Homecry}/>
      </Router>
    );
  }
}

export default App;
