import React, { Component } from 'react'
import axios from "axios"

export class SearchPokemon extends Component {
    constructor(){
        super()

        this.state = {
            searchPokemon: "",
            currentPokemon: {},
            isError: false,
        }
    }

    handleChange = async (e) => {
        this.setState({ searchPokemon: e.target.value })
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()

        const { searchPokemon } = this.state

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
            this.setState({ currentPokemon: data, searchPokemon: "", isError: false})
        } catch (e) {
            this.setState({ searchPokemon: "", currentPokemon: {}, isError: true})
        }
    }


    render() {
        const {searchPokemon, currentPokemon, isError} = this.state
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Find Your Pokemon" value={searchPokemon}></input>
                    <button>Submit</button>
                </form>
                {currentPokemon.name ? (
                    <div>
                        <p>Name: {currentPokemon.name}</p>
                        <img src={currentPokemon.sprites.front_default} alt="" />
                        <p>ID {currentPokemon.id}</p>
                    </div>
                ) : null}

            {isError ? <h2>Pokemon not found!</h2> : null}
            </div>
        )
    }
}

export default SearchPokemon
