import React, {Component} from "react";
import "./LastScreen.scss";
import button_next from './../img/backhome.png';
import seconds from './../img/seconds.png';
import history from './../history';

class LastScreen extends Component {

    constructor() {
        super();
        this.state = { seconds: localStorage.getItem('timer1') };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }
    
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            seconds: seconds,
        });
        
        // Check if we're at zero.
        if (seconds == 0) { 
            clearInterval(this.timer);
            history.push('/');
        }
    }

    render() {
        return (
            <div className="LastScreen">
                <div className="seconds">
                    <img src={seconds} alt="Seconds"/>
                    <p className="seconds_text">{ this.state.seconds }<br/><span>seconds</span></p>
                </div>
                <div className="conculsion">
                    <p className="header">You’re all set!</p>
                    <p className="title">Kindly get your customer<br/>number and internet voucher.</p>
                    <p className="sub_title">Wishing you a productive stay!</p>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/')}><img src={button_next} alt="Back button"/><p>Back</p></div>
                </div>
            </div>
        );
    }
}

export default LastScreen;