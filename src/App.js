import { Route, Switch } from "react-router";
import "./App.css";
import Berries from "./Components/Berries";
import Locations from "./Components/Locations";
import NavBar from "./Components/NavBar";
import Pokemon from "./Components/Pokemon";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to My Pokemon App!</h1>
          </Route>
          <Route path = "/berries" component={Berries}/>
          <Route path="/pokemon" component={Pokemon}/>
          <Route path = "/locations" component={Locations}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
