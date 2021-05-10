import React, { Component } from 'react'
import pokeApI from './getAPI'

export default class Berries extends Component {
    
    componentDidMount(){
        pokeApI.getBerries()
        
    }

    render() {
        return (
            <div>
               <h1>Select a Type</h1>
               <select name="berries" id="berry-select">
               <option value="">--Please choose an option--</option>
                {}
            </select>
     
            </div>
        )
    }
}
