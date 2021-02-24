import React, { Component } from 'react';
import './App.css';
import Homecry from './Homecry.js';
import Home from './Home.js';
import About from './About.js';
import Shop from './Shop.js';
import Upcoming from './Upcoming.js';
import ShopPage from './ShopPage.js';
import Sponsors from './Sponsors.js';
import NotFound from './NotFound.js';
import EventPage from './EventPage.js';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import MediaQuery from 'react-responsive'
import { slide as Menu } from 'react-burger-menu'



import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import about3 from './images/about3.jpg';
import about4 from './images/about4.png';

import cashbag1 from './images/cash-bag 1.png';
import heart1 from './images/heart.png';
import dumpling1 from './images/dumpling 1.png';

import cocos from './images/cocos.png';

import whyIsDayTradingSoHard from './images/hoodie.png';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,

      upcomingEvents: [
        //This is where you add upcoming events to || Don't forget the , at the end of every line except the last
        { eventName: "Crazy Charitable Asians", eventUrl: "Crazy-Charitable-Asians", eventDate: "May 43, 2025", eventIcon: cashbag1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { eventName: "Valentine's Day", eventUrl: "Valentine's-Day", eventDate: "March 55, 2025", eventIcon: heart1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { eventName: "Dumpling Night", eventUrl: "Dumpling-Night", eventDate: "Kill Me, 2025", eventIcon: dumpling1, eventContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }

      ],

      pastEvents: [
        //This is where you add past events to || Don't forget the , at the end of every line except the last
        // { eventName: "2017 First General Meeting", eventUrl: "2017-First-General-Meeting", eventDate: "September 17, 2017", eventIcon: whyIsDayTradingSoHard, eventContent: "Here are the pictures from our first general meeting! Thank you all for coming out!", eventIndex: 1 },
        // { eventName: "Eclipse - 20nd Asian Night", eventUrl: "Eclipse-20th-Asian-Night", eventDate: "October 26, 2017", eventIcon: whyIsDayTradingSoHard, eventContent: "Pictures from the 20th Asian Night clubbing event at Coco Bongo hosted by McMaster Asian F.O.C.U.S., in collaboration @[14862903McMaster Csa] McMaster Vsa and Mcmaster Taiwanese Student Society 麥馬斯特大學台灣同學會! Thank you for coming out, see you at our next event. Be sure to like our Facebook page for updates on future events and follow our instagram @mcmasterasianfocus", eventIndex: 2 },
        // { eventName: "Gingerbread House Contest", eventUrl: "Gingerbread-House-Contest", eventDate: "December 11, 2017", eventIcon: whyIsDayTradingSoHard, eventContent: "Thank you everyone for coming out to our Gingerbread House Contest!", eventIndex: 3 },
        // { eventName: "Asian F.O.C.U.S Noir 2018", eventUrl: "Asian-Focus-Noir", eventDate: "January 18, 2018", eventIcon: whyIsDayTradingSoHard, eventContent: "Pictures from the Noir Asian Night clubbing event at Club Abinsthe hosted by McMaster Asian F.O.C.U.S. Featuring DJOj and Brian Zheng Photography! Thank you for coming out, see you at our next event. Be sure to like our Facebook page for updates on future events and follow our instagram @mcmasterasianfocus", eventIndex: 4 },
        // { eventName: "Second General Meeting 2018", eventUrl: "Second-General-Meeting-2018", eventDate: "January 23, 2018", eventIcon: whyIsDayTradingSoHard, eventContent: "", eventIndex: 5 },
        // { eventName: "Blanche 2018", eventUrl: "Blanche-2018", eventDate: "April 1, 2018", eventIcon: whyIsDayTradingSoHard, eventContent: "McMaster Asian F.O.C.U.S. presents the photos from Blanche - Final Asian Night taken by the talented Brian Zheng Photography (Brian Zee). Please tag your friends! Be sure to like our Facebook page for events next year and to tag us in your instagram post @mcmasterasianfocus. SEE YOU ALL NEXT YEAR!", eventIndex: 6 },
        // { eventName: "AF First General Meeting 2018", eventUrl: "AF-First-General-Meeting-2018", eventDate: "September 17, 2018", eventIcon: whyIsDayTradingSoHard, eventContent: "", eventIndex: 7 },
        // { eventName: "First Asian Club Night - WICKED", eventUrl: "First-Asian-Club-Night-WICKED", eventDate: "October 30, 2018", eventIcon: whyIsDayTradingSoHard, eventContent: "", eventIndex: 8 },
        // { eventName: "Second General Meeting 2019", eventUrl: "Second-General-Meeting-2019", eventDate: "January 25, 2019", eventIcon: whyIsDayTradingSoHard, eventContent: "", eventIndex: 9 },
        // { eventName: "Asian Club Night EUPHORIA", eventUrl: "Asian-Club-Night-EUPHORIA", eventDate: "April 3, 2019", eventIcon: whyIsDayTradingSoHard, eventContent: "", eventIndex: 10 },
        { eventName: "2019 First General Meeting", eventUrl: "2019-First-General-Meeting", eventDate: "September 29, 2019", eventIcon: whyIsDayTradingSoHard, eventContent: "Thank you everyone for coming to McMaster Asian FOCUS's first general meeting, it was such as blast! We hope you all enjoyed our Minute to Win it games and won some amazing prizes! Also, a special thanks Szechuan Noodle Bowl, Beijing Hut, and Sapporo for providing everyone with their delicious dishes and another thank you COCO Fresh Tea and TeaFun for providing us with bubble tea! Here are the long awaited photos, hope to see you all again soon!", eventIndex: 1 },
        { eventName: "First Asian Night: RAID", eventUrl: "First-Asian-Night-RAID", eventDate: "October 9 2019", eventIcon: whyIsDayTradingSoHard, eventContent: "Hey guys! Thank you again for coming to RAID, our first Asian Night 🙂 Here are the all the photos!", eventIndex: 2 },
        { eventName: "Dumpling Night", eventUrl: "Dumpling-Night", eventDate: "December 9, 2019", eventIcon: whyIsDayTradingSoHard, eventContent: "Thank you all for coming to our dumpling night! Thanks to all of you, we raised $250 that night 😍 All proceeds went towards purchasing toiletries for Mission Services Hamilton. Hopefully it was fun for all of you and y’all went home feeling STUFFED! Here are some pictures that captured the moments:", eventIndex: 3 },
        { eventName: "2020 Second General Meeting", eventUrl: "2020-Second-General-Meeting", eventDate: "January 27, 2020", eventIcon: whyIsDayTradingSoHard, eventContent: "Happy Lunar new year everyone! Thank you all for coming to the 2nd the last Asian FOCUS general meeting of the year! We had such a great turn out and hopefully it was a lot of fun for all of you!A special thank you to Szechuan Noodle Bowl, Coco Fresh Tea, Beijing Hut and Sakura Tea for all the delicious food and drinks! Stay tuned for our upcoming events by following our fb and ig page @mcmasterasianfocus, and see you all very soon!", eventIndex: 4 }
         
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
      ],

      storeItems: [
        //This is where you add Store Items to || Don't forget the , at the end of every line except the last
        { itemName: "Asian Focus Hoodie", itemUrlName: "Asian-Focus-Hoodie", itemPicture: whyIsDayTradingSoHard, itemGender: "Male", itemPrice: "50", itemIndex: 1 },
        { itemName: "Yes im out of ideas", itemUrlName: "Yes-im-out-of-ideas", itemPicture: whyIsDayTradingSoHard, itemGender: "Male", itemPrice: "50", itemIndex: 2 },
        { itemName: "Me", itemUrlName: "Me", itemPicture: whyIsDayTradingSoHard, itemGender: "Male", itemPrice: "50", itemIndex: 3 },
        { itemName: "Stick", itemUrlName: "Stick", itemPicture: whyIsDayTradingSoHard, itemGender: "Male", itemPrice: "50", itemIndex: 4 },
        { itemName: "Milk Tea", itemUrlName: "Milk+Tea", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 5 },
        { itemName: "Bubble Tea", itemUrlName: "Bubble+Tea", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 6 },
        { itemName: "Asian Focus Bottle Opener", itemUrlName: "Asian+Focus+Bottle+Opener", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 7 },
        { itemName: "Tears", itemUrlName: "Tears", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 8 },
        { itemName: "John Lee Picture Card", itemUrlName: "John+Lee+Picture+Card", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 9 },
        { itemName: "John Lee Picture Card", itemUrlName: "John+Lee+Picture+Card", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 10 },
        { itemName: "Asian Focus Cup", itemUrlName: "Asian+Focus+Cup", itemPicture: whyIsDayTradingSoHard, itemGender: "Female", itemPrice: "50", itemIndex: 11 }
      ],

      aboutPics: [
        //This is where you add About pics to || Don't forget the , at the end of every line except the last
        { picName: "About Picture 1", picAddy: about1 },
        { picName: "About Picture 2", picAddy: about2 },
        { picName: "About Picture 3", picAddy: about3 },
        { picName: "About Picture 4", picAddy: about4 }
      ]
    }
    this.handleStateChange=this.handleStateChange.bind(this)
    this.closeMenu=this.closeMenu.bind(this)
  }

  mailed() {
    window.location = "mailto:focus@mcmaster.ca";
  }

  openIG() {
    window.open("https://www.instagram.com/mcmasterasianfocus/?hl=en", "_blank")
  }

  openFB() {
    window.open("https://www.facebook.com/mcmasterasianfocus", "_blank")
  }

  openSP() {
    window.open("https://open.spotify.com/user/fk9y35lfngl7yqq3ggrw1vvd5?si=G_-RDlZFTEeCrF6v_cx6mQ", "_blank")
  }

  openTT() {
    window.open("https://www.tiktok.com/@mcmasterasianfocus?source=h5", "_blank")
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu = () => {
    this.setState({menuOpen: false})
  }

  

  render() {
    return (
      <Router>
        <MediaQuery maxWidth={955}>
          <Menu disableAutoFocus isOpen={this.state.menuOpen} onStateChange={this.handleStateChange}>
            <Link>
              <span class="nav-bar-link-content" ><NavLink exact={true} to="/" className="bm-item" onClick={() => this.closeMenu()}>HOME</NavLink></span>
              <span class="nav-bar-link-content" ><NavLink to="/about" className="bm-item"onClick={() => this.closeMenu()}>ABOUT</NavLink></span>
              <span class="nav-bar-link-content" ><NavLink to="/shop" className="bm-item" onClick={this.closeMenu}>SHOP</NavLink></span>
              <span class="nav-bar-link-content" ><NavLink to="/events" className="bm-item" onClick={this.closeMenu}>EVENTS</NavLink></span>
              <span class="nav-bar-link-content" > <NavLink to="/sponsors" className="bm-item" onClick={this.closeMenu}>SPONSORS</NavLink></span>
              <span class="nav-bar-icons-small" onClick={this.closeMenu}>
                <SiInstagram class="nav-bar-social-small"  onClick={this.openIG.bind(this)} /> <GrFacebookOption class="nav-bar-social-small" onClick={this.openFB.bind(this)} /> <GrSpotify class="nav-bar-social-small" onClick={this.openSP.bind(this)} /> <SiTiktok class="nav-bar-social-small" onClick={this.openTT.bind(this)} />
              </span>
            </Link >
          </Menu >
        </MediaQuery >
        <MediaQuery minWidth={956}>
          <div class="nav-bar-logo">
            <Link class="nav-bar-link-logo" to="/">LOGO</Link>
            <div class="nav-bar-content">
              <span class="nav-bar-link-content"><NavLink exact={true} to="/" >HOME</NavLink></span>
              <span class="nav-bar-link-content"><NavLink to="/about">ABOUT</NavLink></span>
              <span class="nav-bar-link-content"><NavLink to="/shop">SHOP</NavLink></span>
              <span class="nav-bar-link-content"><NavLink to="/events">EVENTS</NavLink></span>
              <span class="nav-bar-link-content"> <NavLink to="/sponsors">SPONSORS</NavLink></span>
              <span class="nav-bar-icons">
                <SiInstagram class="nav-bar-social" onClick={this.openIG.bind(this)} /> <GrFacebookOption class="nav-bar-social" onClick={this.openFB.bind(this)} /> <GrSpotify class="nav-bar-social" onClick={this.openSP.bind(this)} /> <SiTiktok class="nav-bar-social" onClick={this.openTT.bind(this)} />
              </span>
            </div>
          </div>
        </MediaQuery>
        <Switch>
          <Route exact path="/" exact render={(props) => <Home  {...props} upcomingEvents={this.state.upcomingEvents} />} />
          <Route path="/about" exact render={(props) => <About  {...props} aboutPics={this.state.aboutPics} />} />
          <Route path="/shop" exact render={(props) => <Shop  {...props} storeItems={this.state.storeItems} />} />
          {this.state.storeItems.map(
            ({ itemIndex, itemUrlName, key }) =>
              <Route path={"/shop/" + itemUrlName} exact render={(props) => <ShopPage  {...props} storeItems={this.state.storeItems[itemIndex - 1]} />} />
          )}
          <Route path="/events" exact render={(props) => <Upcoming  {...props} upcomingEvents={this.state.upcomingEvents} pastEvents={this.state.pastEvents} />} />
          {this.state.pastEvents.map(
            ({ eventIndex, eventUrl, key }) =>
              <Route path={"/events/" + eventUrl} exact render={(props) => <EventPage  {...props} pastEvents={this.state.pastEvents[eventIndex - 1]}  />} />
          )}
          <Route path="/sponsors" exact render={(props) => <Sponsors  {...props} sponsorsList={this.state.sponsorsList} />} />
          <Route component={NotFound} />
        </Switch>

        <div class="new-home-footer">
          <div class="footer-container">
            <div class="new-home-footer-email">
              <span onClick={this.mailed.bind(this)}>focus@mcmaster.ca</span>
            </div>
            <div class="new-home-footer-icons">
              <SiInstagram class="new-home-footer-icons-social" onClick={this.openIG.bind(this)} /> <GrFacebookOption class="new-home-footer-icons-social" onClick={this.openFB.bind(this)} /> <GrSpotify class="new-home-footer-icons-social" onClick={this.openSP.bind(this)} /> <SiTiktok class="new-home-footer-icons-social" onClick={this.openTT.bind(this)} />
            </div>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
