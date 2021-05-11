import "./App.css";
import {Route} from "react-router-dom";
import Home from "./Components/Home/index"

function App() {
  return (
    <div className="app">
      <main>
        
        <Route path="/" component={Home}></Route>
      </main>
    </div>
  );
}

export default App;
