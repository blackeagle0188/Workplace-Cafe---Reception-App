import React, {Component} from "react";
import "./Home.scss";
import HoverImage from "react-hover-image";
import history from './../history';
import home from './../img/home_icon.png';
import hourly from './../img/hourly_select.png';
import hourly_hover from './../img/hourly_select_hover.png';
import daily from './../img/daily_select.png';
import daily_hover from './../img/daily_select_hover.png';
import monthly from './../img/monthly_select.png';
import monthly_hover from './../img/monthly_select_hover.png';
import conference_rooms from './../img/conference_rooms.png';
import conference_rooms_hover from './../img/conference_rooms_hover.png';
import stay from './../img/stayoptions.png';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {details: {addHourlyClass: false, addDailyClass: false, addMonthlyClass: false, addConfClass: false}}
    }
    toggleHourly() {
        this.setState({addHourlyClass: !this.state.addHourlyClass});
    }
    toggleDaily() {
        this.setState({addDailyClass: !this.state.addDailyClass});
    }
    toggleMonthly() {
        this.setState({addMonthlyClass: !this.state.addMonthlyClass});
    }
    toggleConference() {
        this.setState({addConfClass: !this.state.addConfClass});
    }

    render() {

        let hourlyClass = ["hourly"];
        hourlyClass.push('first');
        if(this.state.addHourlyClass) {
            hourlyClass.push('entered');
        }

        let dailyClass = ["daily"];
        if(this.state.addDailyClass) {
            dailyClass.push('entered');
        }

        let monthlyClass = ["monthly"];
        monthlyClass.push('first');
        if(this.state.addMonthlyClass) {
            monthlyClass.push('entered');
        }

        let conferenceClass = ["conference"];
        if(this.state.addConfClass) {
            conferenceClass.push('entered');
        }

        let ipAddr = this.props.location.state;
        if (ipAddr === undefined) {
        ipAddr = '';
        }

        return (
            <div className="home">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link current">
                        <label>{'>'}Stay Options</label>
                    </div>
                </div>
                <div className="service_title">
                    <p className="main_title">
                        What service would you like to avail?
                    </p>
                </div>
                <div className="service_list">
                    <div className="container first">
                        <div className={hourlyClass.join(' ')} onMouseOver={this.toggleHourly.bind(this)} onMouseOut={this.toggleHourly.bind(this)}
                        onClick={() => history.push('/personalinfo', {ipAddr: ipAddr, session: "HOURLY"})}>
                            <HoverImage src={hourly} hoverSrc ={hourly_hover} alt="hourly select"/>
                            <div className="content">
                                <label className="hourly_text">HOURLY</label>
                                <label className="stay_text">STAY</label>
                            </div>
                            <div className="stay_option">
                                <img src={stay} alt="stay option"/>
                                <p>P45 / hour</p>
                            </div>
                        </div>
                        <div className={dailyClass.join(' ')} onMouseOver={this.toggleDaily.bind(this)} onMouseOut={this.toggleDaily.bind(this)}
                        onClick={() => history.push('/personalinfo', {ipAddr: ipAddr, session: "DAILY"})}>
                            <HoverImage src={daily} hoverSrc={daily_hover} alt="daily select"/>
                            <div className="content">
                                <label className="daily_text">DAILY</label>
                                <label className="stay_text">STAY</label>
                            </div>
                            <div className="stay_option">
                                <img src={stay} alt="stay option"/>
                                <p>P320 / day</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    <div className={monthlyClass.join(' ')} onMouseOver={this.toggleMonthly.bind(this)} onMouseOut={this.toggleMonthly.bind(this)}
                        onClick={() => history.push('/PersonalInfo', {ipAddr: ipAddr, session: "MONTHLY"})}>
                            <HoverImage src={monthly} hoverSrc={monthly_hover} alt="monthly select"/>
                            <div className="content">
                                <label className="monthly_text">MONTHLY</label>
                                <label className="stay_text">STAY</label>
                            </div>
                            <div className="stay_option">
                                <img src={stay} alt="stay option"/>
                                <p>P5,000 / month</p>
                            </div>
                        </div>
                        <div className={conferenceClass.join(' ')} onMouseOver={this.toggleConference.bind(this)} onMouseOut={this.toggleConference.bind(this)}
                        onClick={() => history.push('/conferenceroom')}>
                            <HoverImage src={conference_rooms} hoverSrc={conference_rooms_hover} alt="conference rooms"/>
                            <div className="content">
                                <label className="conference_text">CONFERENCE</label>
                                <label className="stay_text">ROOMS</label>
                            </div>
                            <div className="stay_option">
                                <img src={stay} alt="stay option"/>
                                <p>Prices Vary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
