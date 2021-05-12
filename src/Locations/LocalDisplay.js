import React, { Component } from 'react'
import axios from "axios"

export default class LocalDisplay extends Component {
    constructor(){
        super()
        this.state ={ list: [], showList: false}
    }

    handleBTN = ()=>{
        this.setState({showList: !this.state.showList})
    }
    getLocations = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/location");
        console.log(data)
        this.setState({
          list: data.results.map((loc) => loc.name),
        });
    };
    componentDidMount(){
        this.getLocations()
    }
    render() {
        
        const locationList = this.state.list.map((loc, i) => <li key={i}>{loc}</li>)
        return (
            <div>
                 <h1>"List of Locations"</h1>
                 <button onClick={this.handleBTN}>{this.state.showList ? "Hide" : "Show"} Locations</button>
                 <ul>{this.state.showList ? locationList : null}</ul>
            </div>
        )
    }
}
