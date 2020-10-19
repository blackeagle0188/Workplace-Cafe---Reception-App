import React from "react";
import "./Welcome.scss";
import history from './../history';
import logo from './../logo.png';
import circle_left from './../img/circle-left.png';
import circle_right from './../img/circle-right.png';
import button from './../img/button.png';
import bottom from './../img/bottom.png';


const Welcome = (props) => {
  return (
    <div className="App">
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
        <button className="btn start" onClick={() => history.push('/home')}>
          <img src={button} alt="my image" />
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

export default Welcome;