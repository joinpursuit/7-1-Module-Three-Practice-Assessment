import React, { Component } from 'react'
import Poke from './Poke/index'
import axios from 'axios'

export class Pokemon extends Component {
    constructor(){
        super()
        this.state={
            input : "",
            name: "",
            img: "",
            id: ""
        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit = async()=>{
        try{
                const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
                console.log(pokemon)
                this.setState({ 
                name: pokemon.data.name,
                img: pokemon.data.sprites.front_default,
                id: pokemon.data.id
            })
        }catch(error){
                this.setState({
                    id: "404"            
                })
        }
    }
        
  
    render() {
        return (
            <>
                <h1>Search for a Pokemon</h1>
                <div>
                    <input type="text" onChange={this.handleChange} placeholder="Find Your Pokemon"/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <Poke state={this.state}/>                           
                </div>

            </>
        )
    }
}

export default Pokemon
