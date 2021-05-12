import React, { Component } from 'react'
import axios from "axios";

export class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locations: [],
            show: false,
        }
    }

    handleClick = async () => {
        const {data} = await axios.get("https://pokeapi.co/api/v2/location")
        // console.log(data.results)
        this.setState({
            locations: data.results,
            show: !this.state.show,
        })
    }

    render() {
        const {locations,show} = this.state
        const locationList = locations.map((location,i) => <li key={i}>{location.name}</li>)

        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.handleClick}>{!show ? "Show Locations" : "Hide Locations" }</button>
                <ul>
                    {/* {locationList.name ? locationList.name: "HELLOOOO"} */}
                    {show? locationList : null}
                </ul>
            </div>
        )
    }
}

export default Locations;
