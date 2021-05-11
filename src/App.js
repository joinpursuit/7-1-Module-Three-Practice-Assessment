import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <div className="Nav">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to My Pokemon App!</h1>
          </Route>
          <Route path="/berries" component={Berries} />
          <Route path="/pokemon" component={Pokemon} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
