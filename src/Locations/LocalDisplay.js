import React, { Component } from 'react'
import LocalApi from "./LocalApi.js"

export default class LocalDisplay extends Component {
    constructor(){
        super()
        this.state ={ list: [], showList: false}
    }

    handleBTN = ()=>{
        this.setState({showList: !this.state.showList})
    }
    async componentDidMount(){
        const list = await LocalApi.locationUrl()
        this.setState({ list })
    }
    render() {
        const locationList = this.state.list.map((loc, i) => <li key={i}>{loc.name}</li>)
        return (
            <div>
                 <h1>"List of Locations"</h1>
                 <button onClick={this.handleBTN}>{this.state.showList ? "Hide" : "Show"} Locations</button>
                 <ul>{this.state.showList ? locationList : null}</ul>
            </div>
        )
    }
}
