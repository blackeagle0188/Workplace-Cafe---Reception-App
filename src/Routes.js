import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ConferenceRoom from "./ConferenceRoom/ConferenceRoom";
import DrinkSelection from "./DrinkSelection/DrinkSelection";
import LastScreen from "./LastScreen/LastScreen";
import Rating from "./Rating/Rating";
import Setting from "./Setting/Setting";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Welcome} exact />
                    <Route path="/home" component={Home} exact />
                    <Route path="/personalinfo" component={PersonalInfo} exact />
                    <Route path="/conferenceroom" component={ConferenceRoom} exact />
                    <Route path="/drinkselection" component={DrinkSelection} exact />
                    <Route path="/lastscreen" component={LastScreen} exact />
                    <Route path="/rating" component={Rating} exact />
                    <Route path="/setting" component={Setting} exact />
                </Switch>
            </Router>
        )
    }
}
