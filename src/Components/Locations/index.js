import React, { Component } from 'react'
import APICalls from "../APICalls";
import "./Locations.css"

export class Locations extends Component {
    constructor(){
        super()

        this.state = {
            listOfLocations : []
        }
    }

    getLocations = () => {
        if(this.state.listOfLocations.length === 0){
            APICalls.locations().then(response => {
                this.setState({
                    listOfLocations : response
                })
            }) 
        }else{
            this.setState({
                listOfLocations : []
            })
        }
     }

    render() {
        const { listOfLocations } = this.state;
        const Button = (listOfLocations.length > 0 ) ? 
                <button onClick={this.getLocations}>Hide Locations</button> :
                <button onClick={this.getLocations}>Show Locations</button>
    
        return (
            <div className="Locations">
                
                    <h1>List of Locations</h1>
                    {Button}
                
                <ul>
                    {listOfLocations.map((location, i) => <li key={i}>{location.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Locations
