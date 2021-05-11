import './App.css'
import React, { Component } from 'react'
import { Switch, Route }  from "react-router-dom"
import Home from './Home/index'
import NavBar from './NavBar'
import Berries from './Berries/index'
import Pokemon from './Pokemon/index'
import Locations from './Locations/index'
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {
  render() {
    return (

        <div className = "home-style">
          <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home key={uuidv4()} />
          </Route>
          <Route  path="/berries">
              <Berries key={uuidv4()}/>
          </Route>
          <Route  path="/pokemon">
            <Pokemon key={uuidv4()}/>
          </Route>
          <Route path="/locations">
            <Locations key={uuidv4()} />
          </Route>
          <Route render={()=>{ <h1>404: Page not found!</h1>}} />
        </Switch>
      </main>
      </div>

    )
  }
}

export default App
