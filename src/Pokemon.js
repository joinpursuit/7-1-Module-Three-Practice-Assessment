
import axios from 'axios'
import React, { Component } from 'react'

export class Pokemon extends Component {
    constructor(){
        super()
        this.state = {
            input: "",
            pokemonName: "",
            pokemonId: "",
            pokemonSpriteUrl: "",  
            successfulFetch: null       
        }
    }

    handleChange = (e) => {
       const {value} = e.target
       this.setState({input: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        try{
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.input}/`)
            let data = response.data
            this.setState({
                pokemonName: data.name,
                pokemonId: data.id,
                pokemonSpriteUrl: data.sprites.front_default,
                successfulFetch: true
            })   
        } catch{
            this.setState({successfulFetch: false})
        }
        this.pokemonInfo()
    }

    pokemonInfo = () => {
        const {pokemonName, pokemonSpriteUrl, pokemonId, successfulFetch} = this.state

        if (successfulFetch){
            return(
                <div>                
                <h1>Name: {pokemonName}</h1>
                <img src={pokemonSpriteUrl} alt={pokemonName}/>
                <h1>ID {pokemonId}</h1>
                </div> 
            ) 
        } else if (successfulFetch === false){
            return (<h1>Pokemon not found!</h1>)
        } 
    }


    render() {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Find Your Pokemon"
                    onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                {this.pokemonInfo()}

            
            </div>
        )
    }
}

export default Pokemon