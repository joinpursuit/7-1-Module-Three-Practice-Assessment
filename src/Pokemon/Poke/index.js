import React, { Component } from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'

export class Poke extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"",
            img : "",
            id: ""

        }
    }

    componentDidMount(){
        this.loadPokemon()
    }

    loadPokemon = async() =>{
        const { id, path } = this.props
        if(id !==""){
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        this.setState({
            name: pokemon.data.name,
            img: pokemon.data.sprites.front_default,
            id: pokemon.data.id
        })
    }

    }


    render() {
        return (

            <>
                <Switch>
                    <Route path ="/" render={()=> <h2>Use the seacrh bar to find a Pokemon</h2> }/>
                    <Route path = "/:id" render={()=> <h2>lets find</h2> }/>
                    <Route render ={()=>{<h2>Pokemon not found! Try another name or ID number</h2>}}  />
                </Switch>
            
            </>
            )

            // <div>
            //     <h2>Name:{this.state.name}</h2>
            //     <img src={this.state.img} alt={`${this.state.name}`} style={{width:"250px", height:"250px"}}/>
            //     <h2>ID {this.state.id}</h2>
            // </div>
 
    }
}

export default Poke
