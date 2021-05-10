import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchPokemon from "./SearchPokemon"

function Pokemon() {
    return (
        <div>
        <Switch>
            <Route path="/pokemon" component={SearchPokemon} />
        </Switch>
            
        </div>
    )
}

export default Pokemon
