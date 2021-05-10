import "./App.css";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'
import Pokemon from './Pokemon'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1>Welcome to My Pokemon App!</h1>
      </main>
      {/* <Pokemon /> */}

    </div>
  ); 
}

export default App;
