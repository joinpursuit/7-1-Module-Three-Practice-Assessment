import { Route, Link } from "react-router-dom";
import "./App.css";
import Pokemon from './Pokemon'
import Locations from "./Locations"
import Berries from "./Berries"
function App() {
  return (
    <div className="app">
      <main>
        <nav className="header"> 
          <img  className="logo" src="https://www.pinclipart.com/picdir/middle/521-5215473_logo-pokemon-clipart-picture-transparent-pokemon-logo-pokemon.png" alt="pokemon" />
          <Link to="/pokemon" >Pokemon</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/berries">Berries</Link>
        </nav>
        <h1> "Welcome to My Pokemon App!"</h1>
        <div>
          <Route exact path="/pokemon" component={Pokemon} />
          <Route path="/locations" component={Locations} />
          <Route path="/berries" component={Berries} />
        </div>
        
        
      </main>
    </div>
  );
}

export default App;
