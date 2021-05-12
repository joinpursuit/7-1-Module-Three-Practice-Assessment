import React, { Component } from 'react';
import axios from 'axios'

class Berries extends Component {
   state = {
      selectedBerry: '',
      berries: [],
      berry: {}
   }

   fetchBerries = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/berry/')
      console.log(data)
      this.setState({berries: data.results})
   }

   

   componentDidMount() {
      this.fetchBerries()
   }

   handleChange = async (e) => {
      this.setState({selectedBerry: e.target.value})
      const { data } = await axios.get(`https://pokeapi.co/api/v2/berry/${e.target.value}`)
      console.log(data)
      this.setState({berry: data})
   }


   render() {
      const {selectedBerry, berries, berry}  = this.state
      const allBerries = berries.map((berry, i) => { return <option key={i} value={berry.name}>{berry.name}</option>})

      return (
         <div>
            <h1>Select a Type</h1>
            <select onChange={this.handleChange} value={selectedBerry} name="" id="">
            <option value=""></option>
                  {allBerries}
            </select>
            <h2>{berry.name}</h2>
            <h2>{berry.firmness ? berry.firmness.name : null}</h2>
         </div>
      );
   }
}

export default Berries;