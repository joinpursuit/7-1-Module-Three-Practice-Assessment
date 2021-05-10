import './App.css'
import React, { Component } from 'react'
import { Link, Switch, Route }  from "react-router-dom"
import Home from './Home/index'
import Berries from './Home/Berries'
import Pokemon from './Home/Pokemon'
import Locations from './Home/Locations'

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
          <Route exact path="/" component={Home} />
          <Route path="/berries" component={Berries} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/locations" component ={Locations} />
          <Route render={()=>{ <h1>404: Page not found!</h1>}} />
        </Switch>
      </main>
      </div>

    )
  }
}

export default App
