import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Pokemon from "./Components/Pokemon";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokemon" component={Pokemon} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
