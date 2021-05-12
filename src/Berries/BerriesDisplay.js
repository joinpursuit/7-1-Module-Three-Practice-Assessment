import React, { Component } from 'react'
import axios from "axios"

export default class BerriesDisplay extends Component {
    constructor(){
        super()
        this.state={
            list: [],
            berry: {},
            selectval: ''
        }
    }
    selectChange = async (e) =>{
        this.setState({
            selectval: e.target.value
        })
        
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)
        
        this.setState({
            berry: data
        })
    }
    getBerries = async () =>{
        const {data} = await axios.get('https://pokeapi.co/api/v2/berry/')
        this.setState({
            list: data.results
        })
    }
    componentDidMount(){
        this.getBerries()    
    }
    render() {
        const { list, berry } = this.state
        const optlist = list.map((option, i ) => {
            return (
            <option key={i} value={option.name}>{option.name}</option>)})
        const berrylast = !berry.name ? null : (
            <div>
                <h2>{berry.name }</h2>
                <p>{berry.firmness.name }</p>
                <ul>
                    {berry.flavors.map((fla, i) => <li key={i}>{fla.flavor.name} {fla.potency}</li>)}
                </ul>
            </div>
        )
        return (
            <div>
                <h1>"Select a Type" </h1>
                <select onChange={this.selectChange}>
                   <option></option>
                 {optlist}
               </select>
                 {berrylast}
            </div>
        )
    }
}
