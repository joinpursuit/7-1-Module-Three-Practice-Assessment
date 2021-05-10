import "./App.css";
import { Route, Switch } from "react-router-dom";
import Pokemon from "./Pokemon"

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path="/poke" component={Pokemon} />
          <Route render={() => <h1>Welcome to My Pokemon App!</h1>} />
        </Switch>
        
      </main>
    </div>
  );
}

export default App;
