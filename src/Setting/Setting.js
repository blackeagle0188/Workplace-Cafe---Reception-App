import React, { Component } from 'react';
import history from './../history';
import home from './../img/home_icon.png';
import button_back from './../img/button_back.png';
import button_next from './../img/button_next.png';
import './Setting.scss';

class Setting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ipAddr: localStorage.getItem('ipaddr') ? localStorage.getItem('ipaddr') : '159.65.1.49',
            timer1: localStorage.getItem('timer1') ? localStorage.getItem('timer1') : 12,
            timer2: localStorage.getItem('timer2') ? localStorage.getItem('timer2') : 12,
            duration: localStorage.getItem('duration') ? localStorage.getItem('duration') : 120,
            customer_id: 0
        };
    }

    handleChangeIPAddress(e) {
        this.setState({ipAddr: e.target.value});
        localStorage.setItem('ipaddr', e.target.value);
    }
    handleChangeTimer1(e) {
        this.setState({timer1: e.target.value});
        localStorage.setItem('timer1', e.target.value);
    }
    handleChangeTimer2(e) {
        this.setState({timer2: e.target.value});
        localStorage.setItem('timer2', e.target.value);
    }
    handleChangeDuration(e) {
        this.setState({duration: e.target.value});
        localStorage.setItem('duration', e.target.value);
    }
    
    render() {
        return (
            <div className="setting">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link current">
                        <label>{'>'}Setting</label>
                    </div>
                </div>
                <div className="settingpos">
                    <div className="ip_config">
                        <label>Server IP</label>
                        <div>
                            <input type="text" className="ip_address" placeholder="   Enter IP address" value={this.state.ipAddr} onChange={this.handleChangeIPAddress.bind(this)}/>
                        </div>
                    </div>
                    <div className="last_to_home">
                        <label>Timer 1</label>
                        <div>
                            <input type="text" className="last_timer_input" placeholder="   Enter time" value={this.state.timer1} onChange={this.handleChangeTimer1.bind(this)}/><br/>
                            <span>Time to Display last page back to Welcome Page (in seconds)</span>
                        </div>
                    </div>
                    <div className="rating_to_home">
                        <label>Timer 2</label>
                        <div>
                            <input type="text" className="rating_timer_input" placeholder="   Enter time" value={this.state.timer2} onChange={this.handleChangeTimer2.bind(this)}/><br/>
                            <span>Time to display Ratings Page (in seconds)</span>
                        </div>
                    </div>
                    <div className="duration">
                        <label>Duration</label>
                        <div>
                            <input type="text" className="duration_input" placeholder="   Enter duration time" value={this.state.duration} onChange={this.handleChangeDuration.bind(this)}/><br/>
                            <span>Time to check</span>
                        </div>
                    </div>
                </div>
                <div className="nextbackbtnpos">
                    <div className="btn backbutton" onClick={() => history.push('/')}><img src={button_back} alt="Back button"/><p>Back</p></div>
                </div>
            </div>
          );
    }
}

export default Setting;