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
           const berry = await axios.get(e.target.value).data
           this.setState({berry})
       }else{
           this.setState({berry : ""})
       }
    }



    render() {
        const {berry} = this.state
        console.log(berry)
        return (
            <>
                <header><h1>Select a Type</h1></header>
                <div className="berries">
                <select name="select-a-type" id="type" onChange={this.displayBerry}>
                    <option defaultValue="" name="" value=""></option>
                    {this.state.berries}
                </select>
                { (berry !== "") ? <Berry firmness={berry.firmness} flavorList={berry.flavors} berryName={berry.name} key={()=>{uuidv4()}}/> : {} }
                </div>

            </>
        )
    }
}

export default Berries
