import React from 'react'
import { Switch, Route } from 'react-router'
import SelectBerries from "./SelectBerries"

function Berries() {
    return (
        <div>
            <Switch>
                <Route path="/berries" component={SelectBerries}></Route>
            </Switch>
        </div>
    )
}

export default Berries
