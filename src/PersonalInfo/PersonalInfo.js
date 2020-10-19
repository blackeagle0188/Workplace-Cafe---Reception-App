import React, {Component} from "react";
import "./PersonalInfo.scss";
import home from './../img/home_icon.png';
import card from './../img/card.png';
import uncheckImage from './../img/uncheck.png';
import checkImage from './../img/check.png';
import button_back from './../img/button_back.png';
import button_next from './../img/button_next.png';
import history from './../history';

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: '',
            emailText: '',
            cardNum: '',
            accessCode: '',
            isChecked: false,
            session: this.props.location.state.session
        }
    }

    handleChangeName(e) {
        this.setState({nameText: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({emailText: e.target.value});
    }

    handleChangeCardNum(e) {
        this.setState({cardNum: e.target.value});
    }

    handleClickNext(e) {
        
        if (this.state.nameText === '' && this.state.emailText === '') { // Existing Client...
            if (this.state.cardNum === '') {
                this.fetchExistingClientProd(this.state.cardNum);
            } else {
                this.fetchExistingClientAccess(this.state.accessCode);
            }
        }

        if (this.state.nameText !== '' && this.state.emailText !== '' && this.state.cardNum !== '') { // New Client...
            if (this.state.isChecked) {
                let val = {
                    session: this.state.session,
                    name: this.state.nameText,
                    email: this.state.emailText,
                    card: this.state.cardNum,
                    access: this.state.access
                };
                history.push('/drinkselection', val);
            } else {
                alert("Please read and accept terms and conditions.");
            }
        }
    }

    fetchExistingClientProd(card) {

        fetch('http://192.168.1.49/workplace/app/check-registration?prod_card_no=' + card, {
            method: 'POST'
		}).then(response => {
            return response.json();
		}).then(json => {
            console.log(json);
        });
    }

    fetchExistingClientAccess(access) {

        fetch('http://192.168.1.49/workplace/app/check-registration?access_card_no=' + access, {
            method: 'POST'
		}).then(response => {
            return response.json();
		}).then(json => {
            console.log(json);
        });
    }

    render() {
        return(
            <div className="PersonalInfo">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link" onClick={() => history.push('/home')}>
                        <label>{'>'}Stay Options</label>
                    </div>
                    <div className="node personal_link current">
                        <label>{'>'}Personal Info</label>
                    </div>
                </div>
                <div className="service_title">
                    <p className="main_title">
                        Awesome! You chose  <span>{this.state.session} STAY</span>.
                    </p>
                    <p className="sub_title">
                        Please input your personal information.
                    </p>
                </div>
                <div className="user_info">
                    <div className="user_name">
                        <label>Name</label>
                        <div>
                            <input type="text" className="input_name" placeholder="   Your name" value={this.state.nameText} onChange={this.handleChangeName.bind(this)}/>
                        </div>
                    </div>
                    <div className="user_email">
                        <label>Email Address</label>
                        <div>
                            <input type="text" className="input_email" placeholder="   email@email.com" value={this.state.emailText} onChange={this.handleChangeEmail.bind(this)}/>
                        </div>
                    </div>
                </div>
                <div className="other_way">
                    <p className="other_way_text">OR CONNECT VIA</p>
                    <div className="btn_way">
                        <button className="btn_prod">Productivity Card No.</button>
                        <button className="btn_access">Access Code</button>
                    </div>
                    <p className="card_no_title">Productivity Card No.</p>
                    <div className="card_no">
                        <input type="text" className="input_card_no" placeholder="   000-000" value={this.state.cardNum} onChange={this.handleChangeCardNum.bind(this)}/>
                        <div>
                            <div className="description"><span>Enjoy the benefits of having your own Productivity Card! <br/>Approach our barista and sign up now.</span></div>
                            <img src={card} alt="card"/>
                        </div>
                    </div>
                </div>
                <div className="checkbox">
                    <div className="terms">
                        <div className="btn_checkbox" onClick={() => {this.setState({isChecked: !this.state.isChecked})}} >
                            <img src={this.state.isChecked?checkImage:uncheckImage}/>
                        </div>
                        <div className="read_terms"><span>I have read and accept the <u>terms and conditions.</u></span></div>
                    </div>
                    <div className="nextbackbtnpos">
                        <div className="btn backbutton" onClick={() => history.push('/home')}><img src={button_back} alt="Back button"/><p>Back</p></div>
                        <div className="btn nextbutton" onClick={this.handleClickNext.bind(this)}><img src={button_next} alt="Next button"/><p>Next</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;