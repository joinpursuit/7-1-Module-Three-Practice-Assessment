import React from 'react'
import { Route } from 'react-router'
import BerriesDisplay from "./BerriesDisplay.js"

export default function index() {
    return (
        <div>
           <Route path="/" component={BerriesDisplay}/>
        </div>
    )
}
