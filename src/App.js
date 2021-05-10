import { Route, Switch } from "react-router";
import "./App.css";
// import Pokemon from './Pokemon'
// import Locations from "./Locations"
import Berries from "./Berries"
function App() {
  return (
    <div className="app">
      <main>
        <nav className="header"> 
          <img src="src/img/logo-pokemon.png" alt="pokemon" />
        <Switch>
          {/* <Route exact path="/" component={Pokemon}/> */}
          {/* <Route path="/" component={Locations} /> */}
          <Route path="/berries" component={Berries} />
        </Switch>
        </nav>
        <h1> "Welcome to My Pokemon App!"</h1>
        
        
      </main>
    </div>
  );
}

export default App;
