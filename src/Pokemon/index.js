import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Poke from './Poke/index'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export class Pokemon extends Component {
    constructor(){
        super()
        this.state={
            input : "",
            id : "",
            path: "/"
        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit = async()=>{
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.input}`)
            .then( this.setState({ 
                id : this.state.input,
            }))
            .catch(error => {
                this.setState({id: ""})
            })
        }
  

    render() {
        const { id, path } = this.state
        console.log(this.state)
        return (
            <>
                <header><h1>Search for a Pokemon</h1></header>
                <main>
                    <input type="text" onChange={this.handleChange} placeholder="Find your Pokemon"/>
                    <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>
                    <Route path = {path} component ={Poke}/>
                    
                    {/* <Route component ={Poke} />
                    
                    
                    <Route path={`/:${id}`}>  
                            <Poke key={uuidv4()} id={id} path={path}/>  
                    </Route>
                    <Route render ={()=>{<h2>Pokemon not found! Try another name or ID number</h2>}}  />  */}
          
                                    
                </main>

            </>
        )
    }
}

export default Pokemon
