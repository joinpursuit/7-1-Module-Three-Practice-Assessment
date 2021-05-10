import React, { Component } from 'react'
import axios from 'axios'

export class Berries extends Component {

    constructor(){
        super()
        this.state={
            berries: []
        }
    }

    componentDidMount(){
        this.loadBerries()
    }

    loadBerries= async() =>{
        const twentyBerries  = await axios.get("https://pokeapi.co/api/v2/berry/").data.results
        
       const berries =  twentyBerries.map(berry =>{ <Berry name={berry.name}/>})
        this.setState({berries})


    }
    render() {
        return (
            <>
                <header><h1>Select a Type</h1></header>
                <select name="select-a-type" id="type">
                    <option defaultValue="">-</option>
                    {this.state.berries}

                </select>
            </>
        )
    }
}

export default Berries
