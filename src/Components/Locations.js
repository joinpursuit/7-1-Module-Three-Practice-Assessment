import React, { Component } from "react";
import pokemonAPIs from "./pokemonAPI";

export default class Locations extends Component {
  constructor() {
    super();

    this.state = {
      locations: [],
      showlocations: false,
    };
  }

  getLocations = async () => {
    const locations = await pokemonAPIs.getLocations();
    this.setState({ locations });
  };

  handleClick = () => {
    this.setState({
      showlocations: !this.state.showlocations,
    });
  };

  componentDidMount() {
    this.getLocations();
  }

  render() {
    const { locations, showlocations } = this.state;
    const listItems = locations.map((location, i) => (
      <li key={i}>{location}</li>
    ));
    return (
      <div>
        <h1>List of Locations</h1>
        <button onClick={this.handleClick}>
          {showlocations ? "Hide Locations" : "Show Locations"}
        </button>
        <ul>{showlocations ? listItems : null}</ul>
      </div>
    );
  }
}
