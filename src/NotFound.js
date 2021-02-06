import React, { Component } from 'react';
import './NotFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import AliceCarousel from 'react-alice-carousel';
import dumpling from './images/dumpling.png';



class NotFound extends Component {
    render() {
        return (
            <div class="error">
                < div class="error-icon">
                    <div class="error-icon-dumpling">
                        <img src={dumpling} alt="dumping" />
                    </div>
                </div>
                <div class="error-content">
                    <div class="error-content-title">
                        404 ERROR
                    </div>
                    <div class="error-content-desc">
                        Oops! The page you're looking for doesn't exist <br /> or is temporarily unavailable.
                    </div>
                    <div class="error-content-button">
                        <Router>
                            <Link to="/">
                                <button class="error-content-button-click" >
                                    GO BACK HOME                                
                                </button>
                            </Link>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;