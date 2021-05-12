import axios from 'axios';
import React, { Component } from 'react'

export class Pokemon extends Component {
    constructor (){
        super();
        this.state = {
            searchPokemon: '',
            currentPokemon: {},
        }
    }
    handleChange = (e) =>{
        
        this.setState({
            searchPokemon: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchPokemon}`)
            this.setState({
                currentPokemon: data,
                searchPokemon: '',
            })
        }
        catch (e){
            this.setState({
                currentPokemon: {},
                searchPokemon: '',
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' onChange={this.handleChange} value={this.state.searchPokemon} placeholder='Find Your Pokemon' />
                    <button>Submit</button>
                </form>
                {this.state.currentPokemon.name ? (<div>
                    <p>Name: {this.state.currentPokemon.name}</p>
                    <img src={this.state.currentPokemon.sprites.front_default} alt='pokemon'/>
                    <p>ID {this.state.currentPokemon.id}</p>
                </div>) : (<h2>Pokemon not found!</h2>)}
            </div>
        )
    }
}

export default Pokemon
