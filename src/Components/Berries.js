import { Component } from 'react';
import axios from 'axios'

class Berries extends Component {
    state = {
        berries: [],
        selectedBerry: '',
        berry: {}
    }

    getBerry = async () => {
        const { data } = await axios.get(
            'https://pokeapi.co/api/v2/berry/'
        )
        this.setState({
            berries: data.results
        })
    }

    componentDidMount() {
        this.getBerry()
    }

    handleChange = async (e) => {
        this.setState({
            selectedBerry: e.target.value
        })

        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/berry/${e.target.value}`
        )
        this.setState({
            berry: data
        })
    }

    render() {
        const { berries, berry } = this.state
        const berriesList = berries.map(berry => <option value={berry.name} key={berry.name}>{berry.name}</option>)
        return (
            <div>
                <h1>Select a Type</h1>
                <select onChange={this.handleChange}>
                    <option value=''></option>
                    {berriesList}
                </select>
                <h2>{berry.name}</h2>
                <h2>{berry.firmness ? berry.firmness.name : null}</h2>
            </div>
        )
    }
}

export default Berries;