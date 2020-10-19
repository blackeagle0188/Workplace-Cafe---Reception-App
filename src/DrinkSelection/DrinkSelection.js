import React, {Component} from "react";
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
            session: this.props.location.state.session,
        }
    }

    render() {
        return (
            <div className="DrinkSelection">
                <div className="breadcrumb">
                    <div className="node home_link" onClick={() => history.push('/')}>
                        <img src={home} alt="Home"/>
                        <label> Home</label>
                    </div>
                    <div className="node option_link" onClick={() => history.push('/home')}>
                        <label>{'>'}Stay Options</label>
                    </div>
                    <div className="node personal_link" onClick={() => history.push('/personalinfo', this.state.session)}>
                        <label>{'>'}Personal Info</label>
                    </div>
                    <div className="node dring_link current">
                        <label>{'>'}Drink Selection</label>
                    </div>
                </div>
                <div className="service_title">
                    <p className="main_title">
                        Hello, <span>Jen</span>!
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
                        <div className="select">
                            <p>BREWED<br/>COFFEE</p>
                        </div>
                        <p className="description underline">Free</p>
                    </div>
                    <div className="drink second">
                        <div className="type_image">
                            <img src={tea} alt="Tea"/>
                        </div>
                        <div className="select">
                            <p>ICED TEA</p>
                        </div>
                        <p className="description underline">Free</p>
                    </div>
                    <div className="drink third">
                        <div className="type_image">   
                            <img src={other} alt="Other"/>
                        </div>
                        <div className="select">
                            <p>OTHER</p>
                        </div>
                        <p className="description">Take a look at our menu and inform the<br/>barista which drink would you like to order.</p>
                    </div>
                </div>
                <div className="backnextbtn">
                    <div className="btn backbutton" onClick={() => history.push('/personalinfo', this.state.session)}><img src={button_back} alt="Back button"/><p>Back</p></div>
                    <div className="btn nextbutton" onClick={() => history.push('/lastscreen')}><img src={button_next} alt="Next button"/><p>Next</p></div>
                </div>
            </div>
        );
    }
}

export default DrinkSelection;