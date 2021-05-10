import React from 'react'
import { Route } from 'react-router'
import LocalDisplay from "./LocalDisplay.js"

export default function index() {
    return (
        <div>
            <Route exact path="/" component={LocalDisplay} />
        </div>
    )
}
