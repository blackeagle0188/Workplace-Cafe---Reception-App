import React, {Component} from "react";
import "./ConferenceRoom.scss";
import home from './../img/home_icon.png';
import button_back from './../img/button_back.png';
import history from './../history';

class ConferenceRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer_id: this.props.location.state.customer_id
        }
    }

    render() {
        return (
            <div className="conference_room">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link" onClick={() => history.push('/home', {custmer_id: this.state.customer_id})}>
                        <label>{'>'}Stay Options</label>
                    </div>
                    <div className="node personal_link current">
                        <label>{'>'}Conference Rooms</label>
                    </div>
                </div>
                <div className="service_title">
                    <p className="main_title">
                        Here are our Conference Rooms.
                    </p>
                    <p className="sub_title">
                        Please approach our friendly barista for reservations.
                    </p>
                </div>
                <div className="plans">
                    <div className="plan first">
                        <div className="price">
                            <p>8 to 10pax</p>
                        </div>
                        <p className="room_description">Small Meeting <br/>Rooms</p>
                        <div className="first_sub">
                            <p className="sub_price">P360</p>
                            <p className="price_description">PER HOUR</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P900</p>
                            <p className="price_description">3 HOURS</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P2,160</p>
                            <p className="price_description">WHOLE DAY (8 hours)</p>
                        </div>
                    </div>
                    <div className="plan second">
                        <div className="price">
                            <p>12 to 20pax</p>
                        </div>
                        <p className="room_description">Big Meeting <br/>Rooms</p>
                        <div className="first_sub">
                            <p className="sub_price">P500</p>
                            <p className="price_description">PER HOUR</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P1,250</p>
                            <p className="price_description">3 HOURS</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P3,000</p>
                            <p className="price_description">WHOLE DAY (8 hours)</p>
                        </div>
                    </div>
                    <div className="plan third">
                        <div className="price">
                            <p>25 to 30pax</p>                            
                        </div>
                        <p className="room_description">Floor Rental</p>
                        <div className="first_sub">
                            <p className="sub_price">P900</p>
                            <p className="price_description">PER HOUR</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P2,250</p>
                            <p className="price_description">3 HOURS</p>
                        </div>
                        <div className="second_sub">
                            <p className="sub_price">P5,400</p>
                            <p className="price_description">WHOLE DAY (8 hours)</p>
                        </div>
                    </div>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/home', {custmer_id: this.state.customer_id})}><img src={button_back} alt="Back button"/><p>Back</p></div>
                </div>
            </div>
        );
    }
}

export default ConferenceRoom;