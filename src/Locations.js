
import axios from 'axios'
import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export class Locations extends Component {
    constructor(){
        super()
        this.state = {
            showLocations: false,
            hideLocations: true,
            list: []
        }
        
    }

    toggle = () => {
        const {showLocations, hideLocations} = this.state

        if (!showLocations){
            return <button onClick={this.show}>Show Locations</button>
        } else if (!hideLocations){
            return <button onClick={this.hide}>Hide Locations</button>
        }
    }

    show = async () => {
       this.setState({showLocations: true , hideLocations: false})

        let response = await axios.get("https://pokeapi.co/api/v2/location")
        let results = response.data.results

        results.map(result => 
            this.setState({list: [...this.state.list, result.name]}))
    }

    hide = () => {
        this.setState({showLocations: false , hideLocations: true, list: []})
    }


    render() {
        const {list} = this.state

        return (
            <div>
                <h1>List of Locations</h1>
                {this.toggle()}
                <button onClick={this.show}  >clickme</button>
                <ul>
                    {list.map(item => <li key={uuid()}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default Locations