import React from 'react'
import { Route } from 'react-router'
import LocalDisplay from "./LocalDisplay"

export default function index() {
    return (
        <div>
            <Route path="/" component={LocalDisplay} />
        </div>
    )
}
