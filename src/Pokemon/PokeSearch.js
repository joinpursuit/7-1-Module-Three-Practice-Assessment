import React, { Component } from "react";
import axios from "axios";

class PokeSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchPokemon: "",
      currentPokemon: {},
      isError: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      searchPokemon: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchPokemon } = this.state;

    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      );
      this.setState({
        currentPokemon: data,
        searchPokemon: "",
        isError: false,
      });
    } catch (e) {
      this.setState({
        currentPokemon: {},
        searchPokemon: "",
        isError: true,
      });
    }
  };

  render() {
    const { searchPokemon, currentPokemon, isError } = this.state;
    return (
      <div>
        <h1>Search for a Pokemon</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={searchPokemon}
            type="text"
            placeholder="Find Your Pokemon"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>

        {currentPokemon.name ? (
          <div>
            <p>Name: {currentPokemon.name}</p>
            <img src={currentPokemon.sprites.front_default} alt="" />
            <p>ID {currentPokemon.id}</p>
          </div>
        ) : null}

        {isError ? <h2>Pokemon not found!</h2> : null}
      </div>
    );
  }
}

export default PokeSearch;
