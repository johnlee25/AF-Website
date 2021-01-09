import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrFacebookOption, GrSpotify } from 'react-icons/gr';
import { SiTiktok, SiInstagram } from 'react-icons/si';
import { HashLink as Link } from 'react-router-hash-link';
import * as emailjs from 'emailjs-com'




class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'focus@mcmaster.ca',
            message: message,
        }
        emailjs.send('service_i4zxb7w', 'template_vdpdeja', templateParams, 'user_b52aCCjq4O72G5oQcJCgR')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            message: '',
        })
        alert("Message Sent");
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }



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

                <div class="new-home-events">
                    <div class="new-home-events-title">
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

                <div id="contact-us">
                    <div class="new-home-contact-title">
                        Contact Us
                    </div>
                    <div class="new-home-contact-content">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                <input type="text" name="name" placeholder="Name" style={{ "width": "728px" }} onChange={this.handleChange.bind(this, 'name')} value={this.state.name} required />
                            </label>
                            <br />
                            <label>
                                <input type="text" name="email" placeholder="E-mail" style={{ "width": "728px" }} onChange={this.handleChange.bind(this, 'email')} value={this.state.email} required />
                            </label>
                            <br />
                            <label>
                                <textarea placeholder="Message" style={{ "width": "728px", "height": "100px" }} onChange={this.handleChange.bind(this, 'message')} value={this.state.message} required />
                            </label>
                            <div class="new-home-contact-content-submit">
                                <input type="submit" value="Submit" class="new-home-contact-content-submit-btn" />
                            </div>
                        </form>
                    </div>
                </div>


            </div >
        );
    }
}

export default Home;