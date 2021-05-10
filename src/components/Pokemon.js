import React, { Component } from 'react'
import pokemonAPI from "./PokemonAPI"

export default class Pokemon extends Component {
    constructor() {
        super()
        this.state = { search: "", pokemon: "default" }
    }
    formSubmit = async (e) => {
        e.preventDefault()
        const pokemon = await pokemonAPI.pokemon(e.target.search.value)
        this.setState({ search: "", pokemon })
    }
    inputChange = (e) => {
        this.setState({ search: e.target.value })
    }
    render() {
        const getDescription = (status) => {
            if (status === "default") return <h3>Use the search bar to find a Pokemon</h3>
            if (status === "error") return <h3>Pokemon not found! Try another name or ID number</h3>
            return <>
                    <h2>Name: {status.name}</h2>
                    <p><img src={status.sprites.front_default} alt="" /></p>
                    <p>ID {status.id}</p>
                   </>
        }
        return (
            <div>
                <h2>Search for a Pokemon</h2>
                <form onSubmit={this.formSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Find Your Pokemon"
                        onChange={this.inputChange}
                        value={this.state.search}
                    />
                    <button>Submit</button>
                </form>
                {getDescription(this.state.pokemon)}
            </div>
        )
    }
}
