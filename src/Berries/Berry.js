import axios from 'axios'
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class Berry extends Component {
    constructor(props){
        super(props)
        this.state={
            firmness:"",
            flavorList:[],
            berryName :""
        }
    }

    componentDidMount(){
        console.log("Berry mounted")
        this.loadBerry()
    }

    loadBerry=async()=>{
    const berry = await axios.get(this.props.url)
    this.setState({
        firmness : berry.data.firmness.name,
        flavorList: berry.data.flavors.map(flavor => {return <li key={uuidv4()}>{flavor.flavor.name}</li>}),
        berryName: berry.data.name
    })


    }
    render() {
        const {firmness, berryName, flavorList} = this.state
    return (
        <div className="berry-display">
            <h2>{berryName}</h2>
            <h4>{firmness}</h4>
            <ul>
                {flavorList}
            </ul>
        </div>
    )
    }
}

export default Berry
