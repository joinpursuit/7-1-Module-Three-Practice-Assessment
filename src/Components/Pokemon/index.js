import React, { Component } from 'react'
import "./Pokemon.css"
import APICalls from "../APICalls";

export class Pokemon extends Component {
    constructor(){
        super();

        this.state = {
            pokemonData : [],
            pokemon:"",
            result : "Use the search bar to find a Pokemon"
        }
    }

    getPokemon = (e) => {
        e.preventDefault();
        APICalls.getPokemon(this.state.pokemon).then((response) => {
            if(typeof response === 'object'){
                this.setState({
                    pokemonData:response,
                    result:""
                })
            }else if(typeof response === 'string'){
                this.setState({
                    result:response,
                    pokemonData : []
                })
            }else{
                this.setState({
                    pokemonData : [],
                    pokemon:"",
                    result : "Use the search bar to find a Pokemon"
                })
            }
        });
    }

    handleInputChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name] : value 
        })
    }

    render() {
        const {pokemon, result, pokemonData} = this.state;
        const finalResult = pokemonData.length > 0 ? 
        (
        <div className="Pokemon">
            <h1>Name: {pokemonData[0]}</h1>
            <br/>
            <img src={pokemonData[1]} alt="Not Found"/>
            <h2>ID {pokemonData[2]}</h2>
        </div>
        ):
        "";
        return (
            <div className="Pokemon">
                <h1>Search for a Pokemon</h1>
                <form onSubmit={this.getPokemon}>
                    <input type="text" 
                        name="pokemon" 
                        value={pokemon} 
                        onChange={this.handleInputChange} 
                        placeholder="Find Your Pokemon"
                    />
                    <button type="submit">Submit</button>
                </form>
                <br/>

                <h3>{result}</h3>

                {finalResult}

            </div>
        )
    }
}

export default Pokemon
