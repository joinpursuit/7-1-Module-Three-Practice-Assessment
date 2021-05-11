import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
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
    console.log(searchPokemon);
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      );
      console.log(data);
      this.setState({
        currentPokemon: data,
        searchPokemon: "",
        isError: false,
      });
    } catch (e) {
      this.setState({
        searchPokemon: "",
        currentPokemon: {},
        isError: true,
      });
    }
  };

  render() {
    const { searchPokemon, currentPokemon,isError } = this.state;
    return (
      <div>
        <h1>Search for a Pokemon</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={searchPokemon}
            type="text"
            placeholder="Find Your Pokemon"
          />
          <button type="submit">Submit</button>
        </form>
        {currentPokemon.name ? (
          <div>
            <p>Name: {currentPokemon.name}</p>
            <img
              src={currentPokemon.sprites.front_default}
              alt={currentPokemon.name}
            />
            <p>ID {currentPokemon.id}</p>
          </div>
        ) : null}
        {isError? <h2>Pokemon not found!</h2>: null}
      </div>
    );
  }
}
