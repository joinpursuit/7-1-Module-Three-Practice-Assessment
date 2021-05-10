import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Pokemon from "./Pokemon";
import Berries from "./Berries";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/location' component={Location} />
        <Route path='/berries' component={Berries} />
        
        <main>
          <h1>Welcome to My Pokemon App!</h1>
        </main>
      </div>
    </Router>
  );
}

export default App;
