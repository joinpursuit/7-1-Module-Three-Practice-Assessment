import React, { Component } from 'react'
import Berry from '../components/Berry'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export class Berries extends Component {

    constructor(){
        super()
        this.state={
            berries: [],
            berry : ""
        }
    }

    componentDidMount(){
        this.loadBerries()
    }

    loadBerries= async() =>{
        const twentyBerries  = await axios.get("https://pokeapi.co/api/v2/berry/")
        console.log(twentyBerries)
        
       const berries =  twentyBerries.data.results.map(berry =>{ return <option name={berry.name} value={berry.url}>{berry.name}</option>})
        this.setState({berries})
    }

    displayBerry = async(e) =>{
        e.preventDefault()
       if(e.target.value!== ""){
           const berry = await axios.get(e.target.value)
           const key = await uuidv4()
               this.setState({
            berry: <Berry firmness={berry.data.firmness} flavorList={berry.data.flavors} berryName={berry.data.name} key={key}/>
            })
       }else{
           this.setState({berry : ""})
       }
    }



    render() {
        return (
            <>
                <header><h1>Select a Type</h1></header>
                <div className="berries">
                <select name="select-a-type" id="type" onChange={this.displayBerry}>
                    <option defaultValue="" name="" value=""></option>
                    {this.state.berries}
                </select>
                {this.state.berry}
                </div>

            </>
        )
    }
}

export default Berries
