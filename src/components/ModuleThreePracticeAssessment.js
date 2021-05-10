import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from "./NavBar"
import Welcome from "./Welcome"
import Locations from "./Locations"
import Berries from "./Berries"
import Pokemon from "./Pokemon"
import "./ModuleThreePracticeAssessment.css"

export default class ModuleThreePracticeAssessment extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path="/pokemon" component={Pokemon} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/berries" component={Berries} />
                    <Route path="/" component={Welcome} />
                </Switch>
            </div>
        )
    }
}
