import React, { Component } from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import about3 from './images/about3.jpg';
import about4 from './images/about4.png';




class About extends Component {
    render() {
        return (
            <div class="new-body">
                <div class="about-body">
                    <div class="about-all">
                        <div class="about-content">
                            <div class="about-title">
                                About Us
                            </div>
                            <div class="about-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        <br /><br />
                            But also the leap into electronic typesetting, remaining essentially unchanged.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                        <div class="about-pictures">
                            <AliceCarousel autoPlay autoPlayInterval="3000" infinite={true} disableButtonsControls={true}>
                                <img src={about1} className="sliderimg" />
                                <img src={about2} className="sliderimg" />
                                <img src={about3} className="sliderimg" />
                                <img src={about4} className="sliderimg" />
                            </AliceCarousel>
                        </div>
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

export default About;