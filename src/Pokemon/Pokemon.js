import React, { Component } from 'react'
import axios from "axios"
export default class Pokemon extends Component {
    constructor(){
        super()
        this.state={
            search: '',
            pokemon: {},
            isError: false
        }
    }
    handleSubmit = async(e)=>{
        e.preventDefault();
        const {search} = this.state
        try{
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
            console.log(data)
            this.setState({
               search: "", 
               pokemon: data,
               isError: false
            })
        }catch (e){
            this.setState({
                search: '',
                pokemon: {},
                isError: true
            })
        }
        
    }
     inputVal = (e)=>{
         this.setState({
             search: e.target.value
         })
     }


    render() {
        
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
                
                {this.state.pokemon.name ? (
                    <>
                    <p>Name: {this.state.pokemon.name}</p>
                    <p><img src={this.state.pokemon.sprites.front_default} alt="" /></p>
                    <p>ID {this.state.pokemon.id}</p>
                 </>
                ): null}
                {this.state.isError ? <h3>Pokemon not found!</h3> : null}
            </div>
        )
    }
}
