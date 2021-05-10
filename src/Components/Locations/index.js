import React, { Component } from 'react'
import APICalls from "../APICalls";

export class Locations extends Component {
    constructor(){
        super()

        this.state = {
            listOfLocations : []
        }
    }

    getLocations = (e) => {
        if(this.state.listOfLocations > 0){
            this.setState({
                listOfLocations : []
            })
        }else{
            APICalls.locations(response => {
                this.setState({
                    listOfLocations : response
                })
            }) 
        }
     }

    render() {
        const { listOfLocations } = this.state;
        const Button = (listOfLocations > 0 ) ? 
                <button onClick={this.getLocations}>HIDE LOCATIONS</button> :
                <button onClick={this.getLocations}>SHOW LOCATIONS</button>
    
        return (
            <div>
                
                    <h1>List of Locations</h1>
                    {Button}
                
                <ul>
                    {listOfLocations}
                </ul>
            </div>
        )
    }
}

export default Locations
