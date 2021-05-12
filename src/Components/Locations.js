import axios from 'axios';
import { Component } from 'react';

class Locations extends Component {
    state = {
        locations: [],
        showLocations: false
    }

    getLocations = async () => {
        const { data } = await axios.get(
            'https://pokeapi.co/api/v2/location'
        )
        console.log(data)
        this.setState({
            locations: data.results,
            showLocations: !this.state.showLocations
        })

    }
    render() {
        const { locations, showLocations } = this.state
        const locationList = locations.map(location => <li key={location.name}>{location.name}</li>)
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={this.getLocations}>{showLocations ? 'Hide Locations' : 'Show Locations'}</button>
                <ul>
                    {showLocations ? locationList : null}
                </ul>

            </div>
        )
    }
}

export default Locations;