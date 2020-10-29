import React, {Component} from "react";
import axios from "axios";
import "./DrinkSelection.scss";
import home from './../img/home_icon.png';
import coffee from './../img/coffee.png';
import tea from './../img/tea.png';
import other from './../img/other.png';
import button_back from './../img/button_back.png';
import button_next from './../img/button_next.png';
import history from './../history';

class DrinkSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drink:0,
            customer_id: 0,
            customer_name: '',
            customer_email: '',
            params: this.props.location.state,
        }
    }

    handleClickNext(e) {
        let url = "http://" + (localStorage.getItem('ipaddr') ? localStorage.getItem('ipaddr') : '159.65.1.49') + "/workplace/app/create-temporary-session";
        axios.post(url, {
            session_type: "hourly",
            customer_name: this.state.params.name,
            prod_card_no: "",
            access_code: "",
            email_address: this.state.params.email,
            contact_number: "",
            drink_selection: this.state.drink
        })
        .then(res => {
            console.log(res);
            const result = res.data;
            this.state.customer_id = result.customer_id;
            this.state.customer_name = result.customer_name;
            this.state.customer_email = result.email;
            history.push('/lastscreen');
        })
    }

    handleSelectCoffee(e) {
        this.setState({drink: 1});
    }

    handleSelectTea(e) {
        this.setState({drink: 2});
    }

    handleSelectOther(e) {
        this.setState({drink: 3});
    }

    render() {
        let coffeeClass = ["select"];
        if(this.state.drink == 1) {
            coffeeClass.push('selected');
        }
        let teaClass = ["select"];
        if(this.state.drink == 2) {
            teaClass.push('selected');
        }
        let otherClass = ["select"];
        if(this.state.drink == 3) {
            otherClass.push('selected');
        }
        return (
            <div className="DrinkSelection">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link" onClick={() => history.push('/home', { customer_id: this.state.params.customer_id })}>
                        <label>{'>'}Stay Options</label>
                    </div>
                    <div className="node personal_link" onClick={() => history.push('/personalinfo', { customer_id: this.state.params.customer_id })}>
                        <label>{'>'}Personal Info</label>
                    </div>
                    <div className="node dring_link current">
                        <label>{'>'}Drink Selection</label>
                    </div>
                </div>
                <div className="service_title">
                    <p className="main_title">
                        Hello, <span>{this.state.params.name}</span>!
                    </p>
                    <p className="sub_title">
                        You can now choose your drink.
                    </p>
                </div>
                <div className="drink_type">
                    <div className="drink first">
                        <div className="type_image">
                            <img src={coffee} alt="Coffee"/>
                        </div>
                        <div className={coffeeClass.join(' ')} onClick={this.handleSelectCoffee.bind(this)}>
                            <p>BREWED<br/>COFFEE</p>
                        </div>
                        <p className="description underline">Free</p>
                    </div>
                    <div className="drink second">
                        <div className="type_image">
                            <img src={tea} alt="Tea"/>
                        </div>
                        <div className={teaClass.join(' ')} onClick={this.handleSelectTea.bind(this)}>
                            <p>ICED TEA</p>
                        </div>
                        <p className="description underline">Free</p>
                    </div>
                    <div className="drink third">
                        <div className="type_image">   
                            <img src={other} alt="Other"/>
                        </div>
                        <div className={otherClass.join(' ')} onClick={this.handleSelectOther.bind(this)}>
                            <p>OTHER</p>
                        </div>
                        <p className="description">Take a look at our menu and inform the<br/>barista which drink would you like to order.</p>
                    </div>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/personalinfo', this.state.params.session)}><img src={button_back} alt="Back button"/><p>Back</p></div>
                    <div className="btn nextbutton" onClick={this.handleClickNext.bind(this)}><img src={button_next} alt="Next button"/><p>Next</p></div>
                </div>
            </div>
        );
    }
}

export default DrinkSelection;