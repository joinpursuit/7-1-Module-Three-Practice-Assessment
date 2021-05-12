import React, { Component } from 'react'
import axios from 'axios'
export default class Berries extends Component {
    constructor(){
        super();
        this.state = {
            berries: [],
            selctedValue: '',
            berryProperties: {},
        }
    }

    getBerries = async () => {
        const {data} = await axios.get('https://pokeapi.co/api/v2/berry/') 
        console.log(data.results)
        this.setState({berries: data.results})
    }
    handleChange = async (e) => {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)
        this.setState({
            selectedValue: e.target.value,
            berryProperties: data,
        })
    }
    componentDidMount() {
        this.getBerries();
    }
    render() {

        const options = this.state.berries.map((berry, i) => {
            return <option key={i} value={berry.name}>{berry.name}</option>
        })
        return (
            <div>
                <h1>Select a Type</h1>
                <select onChange= {this.handleChange} value={this.state.selectedValue} name='' id=''>
                    <option></option>
                    {options}
                </select>
                <h2>{this.state.berryProperties.firmness ? this.state.berryProperties.firmness.name : null}</h2>
                <h2>{this.state.berryProperties.name}</h2>
                <h2></h2>
            </div>
        )
    }
}
