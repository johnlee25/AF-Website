import React, { Component } from 'react';
import './Upcoming.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



class Upcoming extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="upcomingevents">
                <div class="upcomingevents-upcoming">
                    <div class="upcomingevents-upcoming-title">
                        Upcoming Events
                    </div>
                    <div class="new-home-events-content">
                        {this.props.upcomingEvents.map(
                            ({ eventName, eventDate, eventIcon, eventContent, key }) =>
                                <div class="new-home-events-content-items" >
                                    <div class="new-events-img">
                                        <img src={eventIcon} class="new-events-img-cry" alt="eventIcon" />
                                    </div>
                                    <div class="new-home-events-content-items-info">
                                        <div class="new-home-events-content-items-info-date">
                                            {eventDate}
                                        </div>
                                        <div class="new-home-events-content-items-info-name">
                                            {eventName}
                                        </div>
                                    </div>
                                    <div class="new-home-events-content-items-blurb">
                                        {eventContent}
                                    </div>
                                </div>
                        )}
                    </div>
                </div>
                <hr class="hr-line" />
                <div class="pastevents">
                    <div class="pastevents-title">
                        Past Events
                    </div>
                    <div class="pastevents-content">
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default Upcoming;
