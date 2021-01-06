import React, { Component } from 'react';
import './Homecry.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import temp from './images/temp.png';
import sponsorlogo from './images/sponsorlogo.png';
import { FiInstagram  } from 'react-icons/fi';
import { GrFacebookOption,GrSpotify  } from 'react-icons/gr';
import { SiTiktok  } from 'react-icons/si';


class Homecry extends Component {
    render() {
        return (
            <div class="home">
                <div class="home-banner">
                    <div class="logo">
                        Asian Focus
                    </div>
                    <div class="title">
                        <div class="titles">
                            MCMASTER
                    </div>
                        <div class="titlel">
                            Asian <br />Focus
                    </div>
                    </div>
                </div>
                <div class="home-body">
                    <img class="img-img" src={temp} />
                    <div class="img-text">
                        <div class="img-title">
                            About Us
                        </div>
                        <div class="img-titles">
                            ASIAN FEDERATION OF CHARITABLE ASIAN STUDENTS
                        </div>
                        <div class="img-content">
                            <b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Quisque faucibus nunc sit amet dui pretium porttitor. Duis nec dignissim purus, at sodales neque. Aenean dolor nisl, imperdiet commodo tincidunt ac, sodales in nisi. Duis commodo turpis vitae augue ultrices, eget luctus justo facilisis. Integer vitae lacus vitae libero lacinia laoreet. Maecenas at massa ut arcu accumsan viverra. Aliquam tincidunt augue lacus, at ullamcorper odio condimentum nec. Quisque malesuada porta imperdiet. Aliquam erat volutpat. Nunc condimentum justo sed pretium porta. Fusce.
                        </div>
                    </div>
                </div>
                <div class="home-sponsors">
                    <div class="sponsor-title">
                        Our Sponsors
                    </div>
                    <div class="sponsor-center">
                        <div class="sponsor-logooo">
                            <img class="img-sponsor" src={sponsorlogo} /> <br />
                        FUCK AJIO
                        </div>
                        <div class="sponsor-logooo">
                            <img class="img-sponsor" src={sponsorlogo} /> <br />
                        FUCK AJIO
                        </div>
                        <div class="sponsor-logooo">
                            <img class="img-sponsor" src={sponsorlogo} /> <br />
                        FUCK AJIO
                        </div>
                        <div class="sponsor-logooo">
                            <img class="img-sponsor" src={sponsorlogo} /> <br />
                            FUCK AJIO
                        </div>
                        <div class="sponsor-logooo">
                            <img class="img-sponsor" src={sponsorlogo} /> <br />
                            FUCK AJIO
                        </div>
                    </div>
                    <div class="sponsor-button">
                        <button class="sponsor-click">
                            BECOME A SPONSOR
                        </button>
                    </div>
                </div>
                <div class="home-footer">
                    <div class="footer-email">
                        focus@mcmaster.ca
                        <div class="footer-logos">
                        <FiInstagram class="footer-icon"/> <GrFacebookOption class="footer-icon"/> <GrSpotify class="footer-icon"/> <SiTiktok class="footer-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homecry;