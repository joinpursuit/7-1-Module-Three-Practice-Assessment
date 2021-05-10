import { Link, Route } from "react-router-dom";
import "./App.css";
import Pokemon from "./components/Pokemon"
import Home from "./components/Home" 
import Location from "./components/Location"
import Berries from "./components/Berries"

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/location">Location</Link>
        <Link to= "/berries">Berries</Link>
      </nav>
      <Route exact path ="/" component = {Home}/>
      <Route path="/pokemon" component={Pokemon}/>
      <Route path="/locations" component= {Location}/>
      <Route path="/berries" component={Berries}/>
    </div>
  );
}

export default App;
