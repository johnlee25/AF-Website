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
                        <Router>
                            {this.props.upcomingEvents.map(
                                ({ eventName, eventDate, eventIcon, eventContent, eventUrl, key }) =>
                                    <div class="new-home-events-content-items" >
                                        <Link to={"/events/" + eventUrl} >
                                            <div class="new-events-img">
                                                <img src={eventIcon} class="new-events-img-cry" alt="eventIcon" />
                                            </div>
                                            <div class="new-home-events-content-items-info" style={{ color: "white" }}>
                                                <div class="new-home-events-content-items-info-date">
                                                    {eventDate}
                                                </div>
                                                <div class="new-home-events-content-items-info-name">
                                                    {eventName}
                                                </div>
                                            </div>
                                        </Link>
                                        <div class="new-home-events-content-items-blurb" >
                                            {eventContent}
                                        </div>
                                    </div>
                            )}
                        </Router>
                    </div>
                </div>
                <hr class="hr-line" />
                <div class="pastevents">
                    <div class="pastevents-title">
                        Past Events
                    </div>
                    <div class="pastevents-content">
                        <Router>
                            {this.props.pastEvents.map(
                                ({ eventName, eventDate, eventIcon, key, eventUrl }) =>
                                    <Link to={"/events/" + eventUrl} >
                                        <div class="pastevents-contents-items-pic">
                                            <img src={eventIcon} class="pastevent-img" />
                                            <div class="pastevents-contents-items-desc">

                                                <div class="pastevents-contents-items-desc-name">
                                                    {eventName}
                                                </div>

                                                <div class="pastevents-contents-items-desc-date">
                                                    {eventDate}
                                                </div>


                                            </div>
                                        </div>
                                    </Link>
                            )}

                        </Router>
                    </div>
                </div>

            </div>
        );
    }
}

export default Upcoming;
