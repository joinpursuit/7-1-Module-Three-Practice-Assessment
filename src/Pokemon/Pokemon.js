
import PokeApi from "./PokeApi.js"

import React, { Component } from 'react'

export default class Pokemon extends Component {
    constructor(){
        super()
        this.state={
            search: '',
            pokemon: "default"
        }
    }
    handleSubmit = async(e)=>{
        const pokem = await PokeApi.pokemonURl(e.target.search.value)
        this.setState({
            search: '', pokem
        })
    }
     inputVal = (e)=>{
         this.setState({
             search: e.target.value
         })
     }


    render() {
        const description = (resp)=>{
            if(resp === "default") return <h3>Use the search bar to find a Pokemon</h3>
            if(resp !== "default") return  <h3>'Pokemon not found!'</h3>
            return <>
                       <h2>'Name: {resp.name}'</h2>
                       <p><img src={resp.sprites.front_default} alt="" /></p>
                       <p>ID {resp.id}</p>
                    </>
        }
        return (
            <div>
                <h1>"Search for a Pokemon"</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="search"
                        onChange={this.inputVal}
                        placeholder="Find Your Pokemon"
                        value={this.state.search}></input>
                    <button>Submit</button>
                </form>
                
                {description(this.state.pokemon)}
            </div>
        )
    }
}
