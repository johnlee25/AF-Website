import React, { Component } from 'react';
import './App.css';
import Homecry from './Homecry.js';
import Home from './Home.js';
import About from './About.js';
import Sponsors from './Sponsors.js';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { Navbar, Nav } from 'react-bootstrap';

import cashbag1 from './images/cash-bag 1.png';
import heart1 from './images/heart.png';
import dumpling1 from './images/dumpling 1.png';

import cocos from './images/cocos.png';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      upcomingEvents: [
        //This is where you add upcoming events to || Don't forget the , at the end of every line except the last
        { eventName: "Crazy Charitable Asians", eventDate: "May 43, 2025", eventIcon: cashbag1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { eventName: "Valentine's Day", eventDate: "March 55, 2025", eventIcon: heart1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { eventName: "Dumpling Night", eventDate: "Kill Me, 2025", eventIcon: dumpling1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }

      ],

      sponsorsList: [
        //This is where you add Sponsors to || Don't forget the , at the end of every line except the last
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos },
        { sponsorName: "Coco Bubble Tea", sponsorIcon: cocos }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div class="nav-bar-logo">
          <Link class="nav-bar-link-logo" to="/">LOGO</Link>
          <div class="nav-bar-content">
            <span class="nav-bar-link-content"><NavLink exact={true} to="/" >HOME</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/about">ABOUT</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/shop">SHOP</NavLink></span>
            <span class="nav-bar-link-content"><NavLink to="/events">EVENTS</NavLink></span>
            <span class="nav-bar-link-content"> <NavLink to="/sponsors">SPONSORS</NavLink></span>
            <span class="nav-bar-icons">
              <SiInstagram class="nav-bar-social" /> <GrFacebookOption class="nav-bar-social" /> <GrSpotify class="nav-bar-social" /> <SiTiktok class="nav-bar-social" />
            </span>
          </div>
        </div>


        <Route exact path="/" exact render={(props) => <Home  {...props} upcomingEvents={this.state.upcomingEvents} />} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Homecry} />
        <Route path="/events" component={Homecry} />
        <Route path="/sponsors" exact render={(props) => <Sponsors  {...props} sponsorsList={this.state.sponsorsList} />} />
      </Router>
    );
  }
}

export default App;
