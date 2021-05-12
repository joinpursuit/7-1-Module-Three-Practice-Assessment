import axios from 'axios';
import React, { Component } from 'react';

class Locations extends Component {
   state = {
      locationList: [],
      showLocations: false
   }

   fetchLocations = async () => {
      const { data } = await axios.get('https://pokeapi.co/api/v2/location')
      console.log(data)
      this.setState({
         locationList: data.results,
         showLocations: !this.state.showLocations
      })
   }

   render() {
      const { locationList, showLocations } = this.state
      const allLocations = locationList.map(location => <li key={location.name}>{location.name}</li>)

      return (
			<div>
				<h1>List of Locations</h1>
				<button onClick={this.fetchLocations}>
					{showLocations ? 'Hide Locations' : 'Show Locations'}
				</button>
				<ul>{showLocations ? allLocations : null}</ul>
			</div>
		)
   }
}

export default Locations;