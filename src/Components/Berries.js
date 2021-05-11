import React, { Component } from "react";
import pokemonAPIs from "./pokemonAPI";
import axios from "axios";

export default class Berries extends Component {
  constructor() {
    super();

    this.state = {
      berries: [],
      selectedBerry: "",
      currentBerry: {},
    };
  }

  handleChange = async (event) => {
    this.setState({ selectedBerry: event.target.value });

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/berry/${event.target.value}`,
    );

    this.setState({ currentBerry: data });
  };

  pokemonBerries = async () => {
    const berries = await pokemonAPIs.getBerries();
    this.setState({
      berries,
    });
  };

  componentDidMount() {
    this.pokemonBerries();
  }

  render() {
    const { berries, selectedBerry, currentBerry } = this.state;
    const options = berries.map((berry) => {
      return (
        <option key={berry.name} value={berry.name}>
          {berry.name}
        </option>
      );
    });
    return (
      <div>
        <h1>Select a Type</h1>
        <select
          onChange={this.handleChange}
          value={selectedBerry}
          name=""
          id=""
        >
          <option></option>
          {options}
        </select>
        <h1>{currentBerry.name}</h1>
        <h1>{currentBerry.firmness ? currentBerry.firmness.name : null}</h1>
      </div>
    );
  }
}
