import React from 'react'
import { Route } from 'react-router'
import PokeInput from "./Pokemon.js"

export default function index() {
    return (
        <div>
            <Route path="/" component={PokeInput} />
        </div>
    )
}
