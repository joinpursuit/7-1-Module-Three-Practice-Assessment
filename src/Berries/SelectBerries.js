import React, { Component } from 'react'
import PokemonAPI from "./PokemonAPI"

export class SelectBerries extends Component {
    constructor(){
        super()

        this.state = {
            options: []
        }
    }

    async componentDidMount() {
        const berries = await PokemonAPI.getBerries()
        this.setState({options: berries})
    }

    render() {
        const { options } = this.state
        return (
            <div>
            <h1>Select a Type</h1>
                <select onChange={this.handleChange}>
                {options.map((option, i) => (
                    <option key={i}>{option}</option>
                ))}
                    <option value=""></option>
                </select>
            </div>
        )
    }
}

export default SelectBerries

