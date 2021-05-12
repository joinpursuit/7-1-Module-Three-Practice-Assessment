import axios from 'axios'
import React, { Component } from 'react'

export class ListLocations extends Component {
    constructor(){
        super()
        
        this.state = {
            locations: [],
            showList: false
        }
    }

    getLocations = async () => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/location`)
        this.setState({ locations: data.results.map((loc) => loc.name) })
    }

    componentDidMount(){
        this.getLocations()
    }

    handleClick = () => {
        this.setState({ showList: !this.state.showList})
    }

    render() {
        const { locations, showList } = this.state
        const listItems = locations.map((loc, i) => {
            return (
                <li key={i}>
                    {loc}
                </li>
            )
        })
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{showList ? "Hide Locations" : "Show Locations"}</button>
                <ul>{showList ? listItems : null}</ul>
            </div>
        )
    }
}

export default ListLocations

