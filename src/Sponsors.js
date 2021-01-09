import React, { Component } from 'react';
import './Sponsors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';



class Sponsors extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="sponsors">
                <div class="sponsors-body">
                    <div class="sponsor-content">
                        <div class="sponsor-content-title">
                            Our Sponsors
                        </div>
                        <div class="sponsor-content-links">
                            {this.props.sponsorsList.map(
                                ({ sponsorName, sponsorIcon, key }) =>
                                    <div class="sponsor-content-links-img">
                                        <img src={sponsorIcon} alt={sponsorName} class="sponsor-img" />
                                        <div class="sponsor-content-links-name">
                                            {sponsorName}
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }
}

export default Sponsors;