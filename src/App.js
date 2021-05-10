import "./App.css";
import { Link, Route, Switch} from "react-router-dom"
import Home from "./Components/Home"
import Berries from "./Components/Berries"
import Locations from "./Components/Locations"
import Pokemon from "./Components/Pokemon"

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">
          <img src="http://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-Transparent.png" height="50px" width="50px" alt="pokeball" />
        </Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/pokemon" component={Pokemon}/>
          <Route path="/locations" component={Locations}/>
          <Route path="/berries" component={Berries}/>
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
