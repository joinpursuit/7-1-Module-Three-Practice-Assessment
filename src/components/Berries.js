import React, { Component } from 'react'
import pokemonAPI from "./PokemonAPI"

export default class Berries extends Component {
    constructor() {
        super()
        this.state = { list: [], berry: {} }
    }
    selectChange = async (e) => {
        if (!e.target.value) return this.setState({ berry: {} })
        const obj = this.state.list[e.target.value]
        const description = await pokemonAPI.callThisUrl(obj.url)
        const berry = { name: obj.name, description }
        this.setState({ berry })
    }
    async componentDidMount() {
        const list = await pokemonAPI.berry()
        this.setState({ list })
    }
    render() {
        const { list, berry, berry: { description }} = this.state
        const optionList = list.map((option, i) => <option key={i} value={i}>{option.name}</option>)
        const berryDiv = !berry.name ? null : (
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
                <h2>Select a Type</h2>
                <select onChange={this.selectChange}>
                    <option defaultValue value="">&nbsp;</option>
                    {optionList}
                </select>
                {berryDiv}
            </div>
        )
    }
}
