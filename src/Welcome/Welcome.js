import React, {Component} from "react";
import axios from "axios";
import "./Welcome.scss";
import history from './../history';
import logo from './../logo.png';
import circle_left from './../img/circle-left.png';
import circle_right from './../img/circle-right.png';
import button from './../img/button.png';
import bottom from './../img/bottom.png';
import setting_ico from './../img/settings-button.png';


class Welcome extends Component {

  constructor() {
    super();
    this.state = { customer_id: 0 };
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
      clearInterval(this.timer);
  }

  startTimer() {
      this.timer = setInterval(this.checkout, 60000);
  }

  checkout = () => {
    let url = "http://" + (localStorage.getItem('ipaddr') ? localStorage.getItem('ipaddr') : '159.65.1.49') + "/workplace/app/check-checkout";
    axios.post(url,
      {
        duration: (localStorage.getItem('duration') ? localStorage.getItem('duration') : 120)
      })
    .then(res => {
      console.log(res);
      const data = res.data;
      this.setState({customer_id: data['recent-closed-sessions']});
      console.log(this.state.customer_id);
      if(this.state.customer_id != 0) {
        history.push('/rating');
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="setting_ico" onClick={() => history.push('/setting')}>
        <img src={setting_ico} alt="Setting" />
        </div>
        <div className="circles">
          <div className="left circle">
            <img src={circle_left} alt="circle" />
          </div>
          <div className="right circle">
            <img src={circle_right} alt="circle" />
          </div>
        </div>
        <div className="App-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="welcome-title">
          <p className="welcome">
            Welcome to <span className="app-name">Workplace Cafe.</span>
          </p>
          <p className="sub-welcome">Glad to be working with you.</p>
        </div>
        <div className="home_start">
          <button className="btn start" onClick={() => history.push('/home', { customer_id: this.state.customer_id })}>
            <img src={button} alt="Button" />
            <span className="btn title">START</span>
          </button>
        </div>
        <div className="bottoms">
          <div className="left bottom">
            <img src={bottom} alt="botom"/>
          </div>
          <div className="right bottom">
            <img src={bottom} alt="botom"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;