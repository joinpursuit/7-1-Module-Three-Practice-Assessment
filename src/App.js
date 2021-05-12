import "./App.css";
import PokeSearch from "./Pokemon/PokeSearch"
import PokeBerries from "./Pokemon/PokeBerries"
import PokeLocation from "./Pokemon/PokeLocation"
import NavBar from "./Pokemon/NavBar"
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/"><h1>Welcome to My Pokemon App!</h1> </Route> 
          <Route path="/berries" component={PokeBerries} />
          <Route path="/pokemon" component={PokeSearch}  />
          <Route path="/locations" component={PokeLocation} />
        </Switch>
        
      </main>
    </div>
  );
}

export default App;
