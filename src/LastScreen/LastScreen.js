import React, {Component} from "react";
import "./LastScreen.scss";
import button_next from './../img/backhome.png';
import history from './../history';

class LastScreen extends Component {
    render() {
        return (
            <div className="LastScreen">
                <div className="conculsion">
                    <p className="header">You’re all set!</p>
                    <p className="title">Kindly get your customer<br/>number and internet voucher.</p>
                    <p className="sub_title">Wishing you a productive stay!</p>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/home')}><img src={button_next} alt="Back button"/><p>Back</p></div>
                </div>
            </div>
        );
    }
}

export default LastScreen;