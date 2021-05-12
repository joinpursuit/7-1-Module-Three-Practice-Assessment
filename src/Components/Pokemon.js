import axios from 'axios'
import React, { Component } from 'react'

export class Pokemon extends Component {
    constructor(){
        super()

        this.state = {
            searchPokemon: "",
            pokemon: {},
            isError: false,
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {searchPokemon} = this.state
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
            console.log(data)
    
            this.setState ({
                searchPokemon: "",
                pokemon: data,
                isError: false,
            })
        } catch (error) {
            this.setState ({
                searchPokemon: "",
                pokemon: {},
                isError: true,
            })
        }

    }

    handleChange = (event) => {
        this.setState({
            searchPokemon: event.target.value
        })
    }

    render() {
        const {searchPokemon, pokemon,isError} = this.state
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Find Your Pokemon" onChange={this.handleChange} value={searchPokemon}></input>
                    <button>Submit</button>
                    <p>Use the seach bar to find a Pokemon</p>
                </form>
                
                {pokemon.name ? 
                    (<div>
                        <h2>Name: {pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt="Pic of Pokemon"/>
                        <p>ID {pokemon.id}</p>
                    </div>)
                : null} 
                
                {isError ? <h2>Pokemon not found!</h2>: null}
            </div>
        )
    }
}

export default Pokemon;

