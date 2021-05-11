import React, { Component } from 'react';
import APICalls from "../APICalls"
import "./Berries.css";

export class Berries extends Component {
    constructor(){
        super();

        this.state = {
            berriesData:[],
            berryName: "",
            firmness:"",
            flavours:[]
        }
    }

    componentDidMount(){
        APICalls.loadBerries().then((response) => {
               this.setState({
                berriesData:response
               }) 
            });
    }

    loadBerriesNames = () => {
        const {berriesData} = this.state;
        return berriesData.map((berry, i) => <option key={i} value={berry.name}>{berry.name}</option>)
    }

    handleSelectChange = (event) => {
        const {value} = event.target;
        const {berriesData} = this.state;

        const ourBerry = berriesData.filter((berry) => berry.name === value);
        
        if(ourBerry.length > 0){
            APICalls.getFirmness(ourBerry[0].url).then(response => {
                this.setState({
                    berryName : ourBerry[0].name,
                    firmness : response.firmness.name,
                    flavours : response.flavors
                })
            })
        }else{
            this.setState({
                berryName : "",
                firmness : "",
                flavours : []
            })
        }

    }

    render() {
        const {berryName, firmness, flavours} = this.state;

        const flavors = flavours.map((flavor, i) => <li key={i}>{flavor.flavor.name}</li>);

        return (
            <div className="Berries">
                
                <h1>Select a Type</h1>
                
                <select onChange={this.handleSelectChange}>
                    <option defaultValue="Select a Type"></option>
                    {this.loadBerriesNames()}
                </select>
                
                <h2>Berry Name: {berryName}</h2>
                <h2>Firmness: {firmness}</h2>

                <ul>
                    {flavors}
                </ul>

            </div>
        )
    }
}

export default Berries
