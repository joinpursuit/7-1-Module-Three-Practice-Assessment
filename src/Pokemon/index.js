import React from 'react'
import { Route } from 'react-router'
import PokeInput from "./PokeInput.js"

export default function index() {
    return (
        <div>
            <h1>helooo todos</h1>
            <Route exact path="/" component={PokeInput} />
        </div>
    )
}
