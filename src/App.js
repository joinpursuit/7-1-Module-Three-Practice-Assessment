import "./App.css";
import NavBar from './Components/NavBar'
import Berries from './Components/Berries'
import Pokemon from './Components/Pokemon'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
		<div className='app'>
      <NavBar />
			<Switch>
        <Route exact path='/'>
				<h1>Welcome to My Pokemon App!</h1>
        </Route>
        <Route path='/berries' component={Berries} />
        <Route path='/pokemon' component={Pokemon} />
			</Switch>
		</div>
  )
}

export default App;
