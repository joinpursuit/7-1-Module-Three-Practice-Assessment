import React, { Component } from 'react'
import {Route, Switch, Link} from "react-router-dom";
import PokeLogo from "../Images/PokeLogo.svg";
import Pokemon from "../Pokemon/index"
import Berries from "../Berries/index"
import Locations from "../Locations/index"
import "./Navbar.css"

export class Navbar extends Component {
    render() {
        const logoStyle = {
            height:"50px",
            width:"50px"
        }
        return (
            <div >
                <nav className="Navbar">
                    <img src={PokeLogo} alt="Poke Logo" style={logoStyle}/>
                    <Link to="/pokemon">Pokemon</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/berries">Berries</Link>
                </nav>
                <Switch>
                    <Route path="/pokemon" component={Pokemon}></Route>
                    <Route path="/locations" component={Locations}></Route>
                    <Route path="/berries" component={Berries}></Route>
                </Switch>
            </div>
        )
    }
}

export default Navbar
