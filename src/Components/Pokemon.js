import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
  constructor() {
    super();

    this.state = {
      searchPokemon: "",
      currentPokemon: {},
      error: false,
    };
  }

  handleChange = async (event) => {
    this.setState({ searchPokemon: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { searchPokemon } = this.state;
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`,
      );

      this.setState({
        currentPokemon: data,
        searchPokemon: "",
        error: false,
      });
    } catch (event) {
      this.setState({
        currentPokemon: {},
        searchPokemon: "",
        error: true,
      });
    }
  };

  render() {
    const { searchPokemon, currentPokemon, error } = this.state;
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
            <p>
              <strong>Name:</strong> {currentPokemon.name}
            </p>
            <img src={currentPokemon.sprites.front_default} alt="" />
            <p>
              <strong>ID</strong> {currentPokemon.id}
            </p>
          </div>
        ) : null}

        {error ? (
          <h2>Pokemon not found! Try another name or ID number</h2>
        ) : (
          <h2>Use the search bar to find a Pokemon</h2>
        )}
      </div>
    );
  }
}
