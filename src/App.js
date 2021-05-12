import { Switch, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Berries from './Components/Berries';
import Pokemon from './Components/Pokemon';
import Locations from './Components/Locations';
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path='/'> <h1>Welcome to My Pokemon App!</h1></Route>
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/locations' component={Locations} />
        <Route path='/berries' component={Berries} />
      </Switch>

    </div>
  );
}

export default App;

