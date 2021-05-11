import React, { Component } from 'react'
import BerriesApi from "./BerriesApi.js"

export default class BerriesDisplay extends Component {
    constructor(){
        super()
        this.state={
            list: [],
            berry: {}
        }
    }
    selectChange = async (e) =>{
        if(!e.target.value){
            return this.setState({berry: {}})
        }
        const obj = this.state.list[e.target.value]
        const description = await BerriesApi.berry(obj.url)
        const berry = {name: obj.name, description}
        this.setState({berry})
    }
    async componentDidMount(){
        const list = await BerriesApi.berriesUrl()
        this.setState({ list })
        
    }
    render() {
        const { list, berry, berry: { description }} = this.state
        const optlist = list.map((option, i ) => <option key={i} value={i}>{option.name}</option>)
        const berrylast = !berry.name ? null : (
            <div>
                <h2>{berry.name}</h2>
                <p>{description.firmness.name}</p>
                <ul>
                    {description.flavors.map((fla, i) => <li key={i}>{fla.flavor.name} {fla.potency}</li>)}
                </ul>
            </div>
        )
        return (
            <div>
                <h1>"Select a Type" </h1>
                <select onChange={this.selectChange}>
                   <option  value="" >leppa;</option>
                 {optlist}
               </select>
                 {berrylast}
            </div>
        )
    }
}
