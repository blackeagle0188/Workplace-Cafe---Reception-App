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
    constructor(props) {
        super(props);
        this.state = {
            arrSelect: []
        }
    }

    handleClick0(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[0] = true;
        this.setState({arrSelect: arr});
    }

    handleClick1(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[1] = true;
        this.setState({arrSelect: arr});
    }

    handleClick2(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[2] = true;
        this.setState({arrSelect: arr});
    }

    handleClick3(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[3] = true;
        this.setState({arrSelect: arr});
    }

    handleClick4(e) {
        
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(false);
        }
        arr[4] = true;
        this.setState({arrSelect: arr});
    }

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
                    <img src={rating1} alt="Rating 1" className={this.state.arrSelect[0]?"selected":""} onClick={this.handleClick0.bind(this)}/>
                    <img src={rating2} alt="Rating 2" className={this.state.arrSelect[1]?"selected":""} onClick={this.handleClick1.bind(this)}/>
                    <img src={rating3} alt="Rating 3" className={this.state.arrSelect[2]?"selected":""} onClick={this.handleClick2.bind(this)}/>
                    <img src={rating4} alt="Rating 4" className={this.state.arrSelect[3]?"selected":""} onClick={this.handleClick3.bind(this)}/>
                    <img src={rating5} alt="Rating 5" className={this.state.arrSelect[4]?"selected":""} onClick={this.handleClick4.bind(this)}/>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/home')}><img src={button_next} alt="Back button"/><p>Submit</p></div>
                </div>
            </div>
        );
    }
}

export default Rating;