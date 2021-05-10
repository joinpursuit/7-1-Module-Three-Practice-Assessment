import React, { Component } from 'react'
import axios from "axios"
import "./Berries.css"

export class Berries extends Component {
    constructor(){
        super()

        this.state = {
            berries: [] ,
            selectedBerry: {}
        }
    }

    async componentDidMount(){
        let response = await axios.get("https://pokeapi.co/api/v2/berry/")
        let berries = response.data.results
        berries.map(berry => this.setState({berries: [...this.state.berries, berry]}))
    }

    handleSelectChange = async (e) =>{
        const {value} = e.target

        if (!value){
            this.setState({
                selectedBerry: 
                {berryName: "", 
                firmness: ""} 
            })

        } else {   
            let response = await axios.get(`https://pokeapi.co/api/v2/berry/${value}`)

            this.setState({
                selectedBerry: 
                {berryName: response.data.name, 
                firmness: response.data.firmness.name} 
            })
        }

    }


    render() {
        return (
            <div>
                <h1>Select a Type</h1>
                <form> 
                <select onChange={this.handleSelectChange}> 
                    <option value=""></option>
                    {this.state.berries.map(berry => <option value={berry.name} key={berry.name} >{berry.name}</option>)}
                </select>
                </form>
                <h1>{this.state.selectedBerry.berryName}</h1>
                <p>{this.state.selectedBerry.firmness}</p>

            </div>
        )
    }
}

export default Berries
