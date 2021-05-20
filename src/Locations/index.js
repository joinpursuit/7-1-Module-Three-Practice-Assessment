import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListLocations from "./ListLocations"


function Locations() {
    return (
        <div>
        <Switch>
            <Route path="/locations" component={ListLocations} />
        </Switch>
        </div>
    )
}

export default Locations
