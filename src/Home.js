import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cashbag1 from './images/cash-bag 1.png';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { HashLink as Link } from 'react-router-hash-link';




class Home extends Component {
    render() {
        return (
            <div class="new-home">
                <div class="new-home-banner">
                    <div class="new-home-blurb">
                        <div class="new-home-blurb-title">
                            ASIAN FOCUS
                        </div>
                        <div class="new-home-blurb-content">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                    <div class="new-home-contact-btn">
                        <Link to='/#contact-us'>
                        <button class="new-home-contact-btn-click" >
                            CONTACT US
                        </button></Link>
                    </div>
                </div>

                <hr class="hr-line" />

                <div class="new-home-sponsors">
                    <div class="new-home-sponsors-title">
                        Upcoming Events
                    </div>
                    <div class="new-home-sponsors-content">
                        <div class="new-home-sponsors-content-items">
                            <img class="new-sponsor-img1" src={cashbag1} alt="cashbag" />
                        </div>
                    </div>
                </div>

                <hr class="hr-line" />

                <div id="contact-us">
                    <div class="new-home-contact-title">
                        Contact Us
                    </div>
                    <div class="new-home-contact-content">
                        <form>
                            <label>
                                <input type="text" name="name" placeholder="Name" style={{"width": "728px"}}/>
                            </label>
                            <br/>
                            <label>
                                <input type="text" name="email" placeholder="E-mail" style={{"width": "728px"}}/>
                            </label>
                            <br/>
                            <label>
                                <textarea  placeholder="Message" style={{"width": "728px" , "height": "100px"}}/>
                            </label>
                            <div class="new-home-contact-content-submit">
                                <input type="submit" value="Submit" class="new-home-contact-content-submit-btn"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="new-home-footer">
                    <div class="footer-container">
                        <div class="new-home-footer-email">
                            focus@mcmaster.ca
                    </div>
                        <div class="new-home-footer-icons">
                            <SiInstagram class="new-home-footer-icons-social" /> <GrFacebookOption class="new-home-footer-icons-social" /> <GrSpotify class="new-home-footer-icons-social" /> <SiTiktok class="new-home-footer-icons-social" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;