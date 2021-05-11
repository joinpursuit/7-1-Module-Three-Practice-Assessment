import React, { Component } from 'react'

export class Pokemon extends Component {
    render() {
        return (
            <div>
                <h1>Search for a Pokemon</h1>
                <form>
                    <input type="text" placeholder="Find Your Pokemon"></input>
                    <button>SUBMIT</button>
                    <p>Use the seach bar to find a Pokemon</p>
                </form>
            </div>
        )
    }
}

export default Pokemon

