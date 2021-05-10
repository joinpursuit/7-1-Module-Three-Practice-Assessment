import './App.css'
import React, { Component } from 'react'
import { Link, Switch, Route }  from "react-router-dom"
import Home from './Home/index'
import Berries from './Home/Berries'
import Pokemon from './Home/Pokemon'
import Locations from './Home/Locations'
import { v4 as uuidv4 } from 'uuid'

export class App extends Component {
  render() {
    return (

        <div className = "home-style">
        <nav className="home-nav">
        <Link to="/"><img src="https://c0.klipartz.com/pngpicture/506/902/gratis-png-pokemon-omega-ruby-%E2%80%8B%E2%80%8By-alfa-zafiro-pokemon-go-poke-ball-pokemon-go.png" alt="Pokeball" style={{width:"50px", height:"50px"}}/></Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
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
