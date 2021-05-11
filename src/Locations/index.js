import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

export class Locations extends Component {

    constructor(){
        super()
        this.state={
            locations: [],
            button: "Show Locations",
            display: "none",
            prevLocations:[],
            prevButton: "Hide Locations",
            prevDisplay: "block"
        }
    }

    componentDidMount(){
        this.loadLocations()
    }

    loadLocations= async() =>{
        const locationList = await axios.get("https://pokeapi.co/api/v2/location")
        
       const locations =  locationList.data.results.map(location =>{
            const key = uuidv4()
            return <li key={key}>{location.name}</li>
        })
        this.setState({
            prevLocations: locations
        })
    }


    toggle=()=>{
        this.setState({
            locations: this.state.prevLocations,
            button: this.state.prevButton,
            display: this.state.prevDisplay,
            prevButton: this.state.button,
            prevDisplay: this.state.display,
            prevLocations: this.state.locations
        })

    }

       render() {
        const {button, display, locations}= this.state

        return (
            <>
              <header><h1>List of Locations</h1></header> 
              <button onClick={this.toggle}>{button}</button>
              <ul style={{display}}>{locations}</ul>
            </>
        )
    }
}

export default Locations
