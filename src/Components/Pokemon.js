import axios from 'axios';
import { Component } from 'react';

class Pokemon extends Component {
    state = {
        searchPokemon: '',
        pokemon: {},
        showError: false
    }

    handleChange = (e) => {
        this.setState({
            searchPokemon: e.target.value
        })
    }

    handleSubmit = async (e) => {
        const { searchPokemon } = this.state
        e.preventDefault()
        try {
            const { data } = await axios.get(`
            https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
            )
            console.log(data)
            this.setState({
                searchPokemon: '',
                pokemon: data,
                showError: false
            })

        } catch (error) {
            this.setState({
                searchPokemon: '',
                pokemon: {},
                showError: !this.state.showError
            })
        }
    }
    render() {
        const { searchPokemon, pokemon, showError } = this.state
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={searchPokemon} type='text' placeholder='Find Your Pokemon' />
                    <button type='submit'>Submit</button>
                </form>
                {pokemon.name ? (<div>
                    <h1>Name: {pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt='pokemon' />
                    <p>ID {pokemon.id}</p>
                </div>) : null}
                {showError ? "Pokemon not found! Try another name or ID number" : null}
            </div>
        )
    }
}

export default Pokemon;