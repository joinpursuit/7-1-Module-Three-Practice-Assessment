import React, { Component } from 'react'
import pokemonAPI from "./PokemonAPI"

export default class Locations extends Component {
    constructor() {
        super()
        this.state = { list: [], showList: false }
    }
    buttonClick = () => {
        this.setState({ showList: !this.state.showList })
    }
    async componentDidMount() {
        const list = await pokemonAPI.location()
        this.setState({ list })
    }
    render() {
        const { list, showList } = this.state
        const locationList = list.map((loc, i) => <li key={i}>{loc.name}</li>)
        return (
            <div>
                <h2>List of Locations</h2>
                <button onClick={this.buttonClick}>{showList ? "Hide" : "Show"} Locations</button>
                <ul>{showList ? locationList : null}</ul>
            </div>
        )
    }
}
