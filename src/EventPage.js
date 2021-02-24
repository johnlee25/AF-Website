import React, { Component } from 'react';
import './EventPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { SecondGeneralMeeting2020, DumplingNight, FirstGeneralMeeting2019,FirstGeneralMeeting2017, Elcipse, GingerbreadHouseContest,Noir,
SecondGeneralMeeting2018, Blanche,FirstGeneralMeeting2018, Wicked, SecondGeneralMeeting2019, Euphoria, FirstAsianNightRAID
} from './eventPhotos.js';


class EventPage extends Component {
    constructor(props) {
        super(props);
    }

    eventSelector(index){
        console.log(this.props.pastEvents);
        // if(index=="1"){
        //     return FirstGeneralMeeting2017
        // }
        // else if(index=="2"){
        //     return Elcipse
        // }
        // else if(index=="3"){
        //     return GingerbreadHouseContest
        // }
        // else if(index=="4"){
        //     return Noir
        // }
        // else if(index=="5"){
        //     return SecondGeneralMeeting2018
        // }
        // else if(index=="6"){
        //     return Blanche
        // }
        // else if(index=="7"){
        //     return FirstGeneralMeeting2018
        // }
        // else if(index=="8"){
        //     return Wicked
        // }
        // else if(index=="9"){
        //     return SecondGeneralMeeting2019
        // }
        // if(index=="10"){
        //     return Euphoria
        // }
        if(index=="1"){
            return FirstGeneralMeeting2019
        }
        else if(index=="2"){
            return FirstAsianNightRAID
        }
        else if(index=="3"){
            return DumplingNight
        }
        else if(index=="4"){
            return SecondGeneralMeeting2020
        }



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
                    <Gallery photos={this.eventSelector(this.props.pastEvents.eventIndex)} />
                </div>
            </div>
        );
    }
}

export default EventPage;
