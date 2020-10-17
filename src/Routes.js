import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import Home from "./Home/Home";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import ConferenceRoom from "./ConferenceRoom/ConferenceRoom";
import DrinkSelection from "./DrinkSelection/DrinkSelection";
import LastScreen from "./LastScreen/LastScreen";
import Rating from "./Rating/Rating";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Welcome} exact />
                    <Route path="/Home" component={Home} exact />
                    <Route path="/PersonalInfo" component={PersonalInfo} exact />
                    <Route path="/ConferenceRoom" component={ConferenceRoom} exact />
                    <Route path="/DrinkSelection" component={DrinkSelection} exact />
                    <Route path="/LastScreen" component={LastScreen} exact />
                    <Route path="/Rating" component={Rating} exact />
                </Switch>
            </Router>
        )
    }
}
