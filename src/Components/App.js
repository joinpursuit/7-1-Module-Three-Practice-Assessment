import React, { Component } from 'react';
import "./App.css";
import {Link, Route} from "react-router-dom";

import Pokemon from "./Pokemon.js"
import Berries from "./Berries.js"
import Locations from "./Locations.js"

export class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="Navbar">
          <img src="https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png" alt="Pokeball logo" className="logo" />
          {" "}
          <Link to="/pokemon">Pokemon</Link>
          {" "}
          <Link to="/locations">Locations</Link>
          {" "}
          <Link to="/berries">Berries</Link>
        </nav>
        <main>
          <h1>Welcome to My Pokemon App!</h1>
          <Route exact path="/pokemon" component={Pokemon}/>
          <Route exact path="/locations" component={Locations}/>
          <Route exact path="/berries" component={Berries}/>
        </main>
      </div>
    )
  }
}

export default App;


