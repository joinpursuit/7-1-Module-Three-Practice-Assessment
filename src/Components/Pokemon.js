import axios from 'axios';
import { Component } from 'react';

class Pokemon extends Component {
    state = {
        searchPokemon: '',
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
                searchPokemon: ''
            })

        } catch (error) {

        }
    }
    render() {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Pokemon;