import "./App.css";
import NavBar from './Components/NavBar'
import {Switch, Route } from 'react-router-dom'
import Berries from './Components/Berries'
import Pokemon from './Components/Pokemon'
import Location from './Components/Location'
function App() {
  return (
    <div className="app">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path = '/'><h1>Welcome to My Pokemon App!</h1></Route>
          <Route path = '/locations' component= {Location} />
          <Route path = '/berries' component={Berries} />
          <Route path = '/pokemon' component={Pokemon} />
        </Switch>

      </main>
    </div>
  );
}

export default App;
