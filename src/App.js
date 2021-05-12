import "./App.css";
import { Link, Route, Switch} from "react-router-dom";
import Pokemon from "./Pokemon";
import Locations from "./Locations";
import Berries from "./Berries";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">
          <img src="https://i.pinimg.com/originals/fd/18/c6/fd18c6d26d4d9d26a0bd9d1a2fb2bd04.png" alt="" />
        </Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/berries">Berries</Link>
      </nav>
      <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/locations" component={Locations} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="/berries" component={Berries} />
      </Switch>
    </div>
  );
}

export default App;
