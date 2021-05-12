// import axios from 'axios'
// import React, { Component } from 'react'

// export default class Berries extends Component {
//     constructor() {
//         super() 
//             this.state = {
//                 berries: []
//             }
        
//     }

//     componentDidMount() {
//         this.getBerries()
//     }

//     getBerries = async() => {
//         const berry = await axios.get('https://pokeapi.co/api/v2/berry')
//         this.setState({
//          berries: berry.data.results
            
//         })
//         console.log(berry)
//     }
//     render() {
//         return (
//             <div>
//                 <form action="">
//                 <h1>Select a Type</h1>
//                 <select name="" id="" >
//                     <option value="">-</option>
               
//                 {this.state.berries}
//                 </select>
//                 </form>
//             </div>
//         )
//     }
// }

/////////////teyannas/////////////////
// import React, { Component } from 'react'
// import axios from "axios"
// //import "./Berries.css"

// export class Berries extends Component {
//     constructor(){
//         super()

//         this.state = {
//             berries: [] ,
//             selectedBerry: {}
//         }
//     }

//     async componentDidMount(){
//         let response = await axios.get("https://pokeapi.co/api/v2/berry/")
//         let berries = response.data.results
//         berries.map(berry => this.setState({berries: [...this.state.berries, berry]}))
//     }

//     handleSelectChange = async (e) =>{
//         const {value} = e.target

//         if (!value){
//             this.setState({
//                 selectedBerry: 
//                 {berryName: "", 
//                 firmness: ""} 
//             })

//         } else {   
//             let response = await axios.get(`https://pokeapi.co/api/v2/berry/${value}`)

//             this.setState({
//                 selectedBerry: 
//                 {berryName: response.data.name, 
//                 firmness: response.data.firmness.name} 
//             })
//         }

//     }


//     render() {
//         return (
//             <div>
//                 <h1>Select a Type</h1>
//                 <form> 
//                 <select onChange={this.handleSelectChange}> 
//                     <option value=""></option>
//                     {this.state.berries.map(berry => <option value={berry.name} key={berry.name} >{berry.name}</option>)}
//                 </select>
//                 </form>
//                 <h1>{this.state.selectedBerry.berryName}</h1>
//                 <p>{this.state.selectedBerry.firmness}</p>

//             </div>
//         )
//     }
// }

// export default Berries



/////////////////Myras//////////////


import React, { Component } from 'react';
import axios from 'axios' 

export default class Berries extends Component {
    constructor(){
        super() 
        this.state= {
            berries: [],
            selected: '',
            berryType: {}
        }
    }

    handleSelectChange = async (e) => {
        this.setState({
            selected: e.target.value
        })
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)
        this.setState({
            berryType : data
        })
    }
    

componentDidMount() {
    this.getBerries()
}

getBerries = async() => {
    const { data} = await axios.get("https://pokeapi.co/api/v2/berry/");
    this.setState({
        berries: data.results
    })
}
    
    render() {
        return (
            <div>
                <h1>Select a Type</h1>
                <select name="" id="" onChange={this.handleSelectChange} >
                <option value=""></option>
                {this.state.berries.map(berry => <option value={berry.name} key={berry.name}>{berry.name}</option>)}
               
                </select>
                <h1>{this.state.berryType.name}</h1>
                <p>{this.state.berryType.firmness ? this.state.berryType.firmness.name : null}</p>
            </div>
        )
    }
}

