import React, { Component } from 'react'

export class SearchPokemon extends Component {
    constructor(){
        super()

        this.state = {
            input: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form>
                    <input type="text" placeholder="Find Your Pokemon"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchPokemon
