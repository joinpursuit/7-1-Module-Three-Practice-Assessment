import React, { Component } from 'react'
import {Route} from "react-router-dom";
import Navbar from "./Navbar"

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Route exact path="/" render= {() => <h1>Welcome to my pokemon app!</h1>} />
            </div>
        )
    }
}

export default Home
