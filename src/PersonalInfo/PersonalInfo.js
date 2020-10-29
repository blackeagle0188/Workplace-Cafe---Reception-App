import React, {Component} from "react";
import axios from "axios";
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
            signup: this.props.location.state.signup,
            nameText: '',
            emailText: '',
            signin_email: '',
            cardNum: '',
            accessCode: '',
            isChecked: true,
            session: this.props.location.state.session,
            customer_id: this.props.location.state.customer_id,
            prouctivity: true,
        }
    }

    handleChangeName(e) {
        this.setState({nameText: e.target.value});
    }

    handleChangeEmail(e) {
        this.setState({emailText: e.target.value});
    }

    handleChangeSignInEmail(e) {
        this.setState({signin_email: e.target.value});
    }

    handleChangeCardNum(e) {
        this.setState({cardNum: e.target.value});
    }

    handleClickNext(e) {
        if (this.state.nameText === '') { // Existing Client...
            if(this.state.prouctivity) {
                if (this.state.cardNum !== '') {
                    let url = "http://" + (localStorage.getItem('ipaddr') ? localStorage.getItem('ipaddr') : '159.65.1.49') + "/workplace/app/check-registration";
                    axios.post(url, {
                        prod_card_no: this.state.cardNum
                    })
                    .then(res => {
                        console.log(res);
                        const data = res.data;
                        if(data.status == 500) {
                            alert(data.message);
                        }
                        else {
                            if (this.state.isChecked) {
                                let val = {
                                    customer_id: this.state.customer_id,
                                    session: this.state.session,
                                    name: data["customer-name"],
                                    email: this.state.signin_email,
                                    card: data["prod-card-no"],
                                };
                                history.push('/drinkselection', val);
                            } else {
                                alert("Please read and accept terms and conditions.");
                            }
                        }
                    })
                }
            }
            else {
                if (this.state.signin_email !== '') {
                    let url = "http://" + (localStorage.getItem('ipaddr') ? localStorage.getItem('ipaddr') : '159.65.1.49') + "/workplace/app/check-registration";
                    axios.post(url, {
                        email: this.state.signin_email
                    })
                    .then(res => {
                        console.log(res);
                        const data = res.data;
                        if(data.status == 500) {
                            alert(data.message);
                        }
                        else {
                            if (this.state.isChecked) {
                                let val = {
                                    customer_id: this.state.customer_id,
                                    session: this.state.session,
                                    name: data["customer-name"],
                                    email: this.state.signin_email,
                                    card: data["prod-card-no"],
                                };
                                history.push('/drinkselection', val);
                            } else {
                                alert("Please read and accept terms and conditions.");
                            }
                        }
                    })
                }
            }
        }
        if (this.state.nameText !== '') { // New Client...
            
            let val = {
                customer_id: this.state.customer_id,
                session: this.state.session,
                name: this.state.nameText,
                email: this.state.emailText,
                card: this.state.cardNum,
                access: this.state.access
            };
            history.push('/drinkselection', val);
        }
    }

    fetchExistingClientProd(card) {

        fetch('http://159.65.1.49/workplace/app/check-registration?prod_card_no=' + card, {
            method: 'POST'
		}).then(response => {
            return response.json();
		}).then(json => {
            console.log(json);
        });
    }

    render() {

        let prodBtn = ["btn_prod"];
        let accessBtn = ["btn_access"];
        if(this.state.prouctivity) {
            prodBtn.push("selected");
        } else {
            accessBtn.push("selected");
        }

        return(
            <div className="PersonalInfo">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link" onClick={() => history.push('/home', { customer_id: this.state.customer_id })}>
                        <label>{'>'}Stay Options</label>
                    </div>
                    <div className="node personal_link current">
                        <label>{'>'}Personal Info</label>
                    </div>
                </div>
                { this.state.signup ?
                <div className="service_title">
                    <p className="main_title">
                        Awesome! You chose  <span>{this.state.session} STAY</span>.
                    </p>
                    <p className="sub_title">
                        Please input your personal information.
                    </p>                    
                </div>
                :
                <div className="service_title">
                    <p className="main_title">
                        Glad to have you back!
                    </p>
                    <p className="sub_title">
                        Please input any of the details below.
                    </p>                    
                </div>
                }
                { this.state.signup ?
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
                : null}
                <div className="other_way">
                    { this.state.signup ?
                    <p className="other_way_text">OR CONNECT VIA</p>
                    : null}
                    <div className="btn_way">
                        <button className={prodBtn.join(' ')} onClick={() => this.setState({prouctivity: true})}>Productivity Card No.</button>
                        <button className={accessBtn.join(' ')} onClick={() => this.setState({prouctivity: false})}>Registered Email</button>
                    </div>
                    { this.state.prouctivity ?
                    <div>
                        <p className="card_no_title">Productivity Card No.</p>
                        <div className="card_no">
                            <input type="text" className="input_card_no" placeholder="   000-000" value={this.state.cardNum} onChange={this.handleChangeCardNum.bind(this)}/>
                            <div>
                                <div className="description"><span>Enjoy the benefits of having your own Productivity Card! <br/>Approach our barista and sign up now.</span></div>
                                <img src={card} alt="card"/>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <p className="email_title">Registered Email</p>
                        <div className="email">
                            <input type="text" className="input_email" placeholder="   email@email.com" value={this.state.signin_email} onChange={this.handleChangeSignInEmail.bind(this)}/>
                        </div>
                    </div>
                    }
                </div>
                <div className="checkbox">
                    <div className="terms">
                        <div className="btn_checkbox" onClick={() => {this.setState({isChecked: !this.state.isChecked})}} >
                            <img src={this.state.isChecked?checkImage:uncheckImage} alt="State"/>
                        </div>
                        <div className="read_terms"><span>I have read and accept the <u>terms and conditions.</u></span></div>
                    </div>
                    <div className="nextbackbtnpos">
                        <div className="btn backbutton" onClick={() => history.push('/home', { customer_id: this.state.customer_id })}><img src={button_back} alt="Back button"/><p>Back</p></div>
                        <div className="btn nextbutton" onClick={this.handleClickNext.bind(this)}><img src={button_next} alt="Next button"/><p>Next</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalInfo;