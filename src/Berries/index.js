import React, { Component } from 'react'
import Berry from './Berry'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

export class Berries extends Component {

    constructor(){
        super()
        this.state={
            berries: [],
            berryURL : ""
        }
    }

    componentDidMount(){
        this.loadBerries()
    }

    loadBerries= async() =>{
        const twentyBerries  = await axios.get("https://pokeapi.co/api/v2/berry/")
        
       const berries =  twentyBerries.data.results.map(berry =>{
            const key = uuidv4()
            return <option name={berry.name} value={berry.url} key={key}>{berry.name}</option>
        })
        this.setState({berries})
    }

    displayBerry = async(e) =>{
        e.preventDefault()
        this.setState({
             berryURL : e.target.value
        })
    }



    render() {
        const {berryURL} = this.state
        const key = uuidv4()
        return (
            <>
                <header><h1>Select a Type</h1></header>
                <div className="berries">
                <select name="select-a-type" id="type" onChange={this.displayBerry}>
                    <option defaultValue="" name="" value=""></option>
                    {this.state.berries}
                </select>
                {(berryURL!== "") ? <Berry url={berryURL} key={key}/> : "" }
                </div>

            </>
        )
    }
}

export default Berries
