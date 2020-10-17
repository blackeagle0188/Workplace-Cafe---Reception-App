import React, {Component} from "react";
import "./Rating.scss";
import seconds from './../img/seconds.png';
import rating1 from './../img/btn-ico-rating-1.png';
import rating2 from './../img/btn-ico-rating-2.png';
import rating3 from './../img/btn-ico-rating-3.png';
import rating4 from './../img/btn-ico-rating-4.png';
import rating5 from './../img/btn-ico-rating-5.png';
import button_next from './../img/button_next.png';
import history from './../history';

class Rating extends Component {
    render() {
        return (
            <div className="Rating">
                <div className="seconds">
                    <img src={seconds} alt="Seconds"/>
                    <p className="seconds_text">12<br/><span>seconds</span></p>
                </div>
                <div className="rate_text">
                    <p className="title">Glad to be working with you.</p>
                    <p className="sub_title">Please rate your stay.</p>
                </div>
                <div className="rate_icons">
                    <img src={rating1} alt="Rating 1"/>
                    <img src={rating2} alt="Rating 2"/>
                    <img src={rating3} alt="Rating 3"/>
                    <img src={rating4} alt="Rating 4"/>
                    <img src={rating5} alt="Rating 5"/>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/Home')}><img src={button_next} alt="Back button"/><p>Submit</p></div>
                </div>
            </div>
        );
    }
}

export default Rating;