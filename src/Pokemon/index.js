import React from "react";
import { Switch, Route } from "react-router-dom";
import PokeBerries from "./PokeBerries";
import PokeLocation from "./PokeLocation";
import PokeSearch from "./PokeSearch";

const Pokemon = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/poke/berries" component={PokeBerries} />
                <Route exact path="/poke/location" component={PokeLocation} />
                <Route path="poke/search" component={PokeSearch} />
            </Switch>
        </div>
    )
}

export default Pokemon;
