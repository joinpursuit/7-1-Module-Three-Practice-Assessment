import "./App.css";
import React, { Component } from 'react';
import {Link, Route, Switch} from "react-router-dom";

import Pokemon from "./Pokemon.js"
import Berries from "./Berries.js"
import Locations from "./Locations.js"
import Home from "./Home.js"

export class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="Navbar">
          <Link to="/">
            <img src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png" alt="Pokeball logo" className="logo" />
          </Link>
          {" "}
          <Link to="/pokemon" className="Link">Pokemon</Link>
          {" "}
          <Link to="/locations" className="Link">Locations</Link>
          {" "}
          <Link to="/berries" className="Link">Berries</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/pokemon" component={Pokemon}/>
            <Route path="/locations" component={Locations}/>
            <Route path="/berries" component={Berries}/>
            <Route path="/" component={Home}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;


