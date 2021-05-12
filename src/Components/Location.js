import axios from 'axios'
import React, { Component } from 'react'

export class Location extends Component {
    constructor(){
        super()
        this.state = {
            locations: [],
            showList: false,
        } 
    }
    getLocations = async () => {
        const {data} = await axios.get ("http://pokeapi.co/api/v2/location")
        console.log (data.results.map((location) => location.name))
        this.setState({
            locations : data.results.map ((location) => location.name),
        })
    }
    componentDidMount() {
        this.getLocations();
    }
    handleClick = () => {
        this.setState({
            showList: !this.state.showList,
        })
    }
    render() {
        const listItems = this.state.locations.map ((location, i) => <li key={i}>{location}</li>) 
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{this.state.showlist ? "Hide Locations" : "Show Locations"}</button>
                <ul>{this.state.showList ? listItems : null}</ul>
            </div>
        )
    }
}

export default Location
