import React, { Component } from 'react'
import axios from "axios"

export class Berries extends Component {
    constructor(){
        super()

        this.state = {
            berries: [],
            selectedBerry: "",
            showFirmness: {},
        }
    }

    // method, fetch as soon as I am on page
    componentDidMount () {
        this.getBerries()
    }

    getBerries = async () => {
        const {data} = await axios.get("https://pokeapi.co/api/v2/berry")
        // console.log(data) 
        this.setState({
            berries: data.results
        })
    }

    handleChange = async (event) => {
        this.setState ({
            selectedBerry: event.target.value,
        })
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/${event.target.value}`)
        // console.log(data)
        this.setState ({
            showFirmness: data
        })
    }
    
    render() {
        const {berries, showFirmness} = this.state
        const options = berries.map(berry => <option key={berry.name}>{berry.name}</option>)
        return (
            <div>
                <h1>Select a Type</h1>
                <select onChange={this.handleChange} className="Select">
                    <option></option>
                    {options}
                </select>

                <h2>{showFirmness.name}</h2>
                <h2>{showFirmness.firmness ? showFirmness.firmness.name : null}</h2>
            </div>
        )
    }
}

export default Berries
