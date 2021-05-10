import { Route, Switch, Link } from "react-router-dom"
import SearchPokemon from "./Pokemon"
import ListLocations from "./Locations"
import SelectBerries from "./Berries"
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
      <nav>
        <Link to="/"><img style={{height: "50px"}} src="https://pbs.twimg.com/profile_images/1347869339052072963/oA0oMpur.jpg" alt="pokeball"></img></Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
        <Switch>
          <Route path="/berries" component={SelectBerries} />
          <Route path="/locations" component={ListLocations} />
          <Route path="/pokemon" component={SearchPokemon} />
          <Route path="/" render={() => <h1>Welcome to My Pokemon App!</h1>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
