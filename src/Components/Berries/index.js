import React, { Component } from 'react';
import APICalls from "../APICalls"

export class Berries extends Component {
    constructor(){
        super();

        this.state = {
            berries:[]
        }
    }

    componentDidMount(){
        APICalls.loadBerries().then((response) => {
            response.forEach((berry, i) => {
                this.setState({
                    berries : [...this.state.berries, <option key={i} value={berry}>{berry}</option>]
                })
            })
        });
    }

    render() {
        const {berries} = this.state;
        return (
            <div>
                <h1>Select a type</h1>
                <select name="" id="">
                    <option defaultValue="Select a Type">Select a Type</option>
                    {berries}
                </select>
            </div>
        )
    }
}

export default Berries
