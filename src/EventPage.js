import React, { Component } from 'react';
import './EventPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';



class EventPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="eventpage">
                <div class="eventpage-heading">
                    <div class="eventpage-heading-title">
                        {this.props.pastEvents.eventName}
                    </div>
                    <div class="eventpage-heading-date">
                        {this.props.pastEvents.eventDate}
                    </div>
                    <div class="eventpage-heading-content">
                        {this.props.pastEvents.eventContent}
                    </div>
                </div>
                <div class="eventpage-pics">
                    hello
                </div>
            </div>
        );
    }
}

export default EventPage;
