import axios from "axios";
import React, { Component } from "react";

export default class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      // selectedValue: "",
      currentBerry: {},
        // name:"",
        // firmness:"",
    };
  }

  handleChange = async () => {
    // this.setState({ selectedValue: e.target.value });
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/berry/cheri`
    );
    console.log(data);
    this.setState({ currentBerry: data });
  };

  getBerries = async () => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/berry/`);
    // console.log(data.results);
    this.setState({ berries: data.results });
  };
  componentDidMount() {
    this.getBerries();
    this.handleChange()
  }
  render() {
    const { berries,selectedValue, currentBerry } = this.state;
    const options = berries.map((berry, i) => {
      return (
        <option key={i} value={berry.name}>
          {berry.name}
        </option>
      );
    });
    return (
      <div>
        <h1>Select a Type</h1>
        <select onChange={this.handleChange}>
          <option value=""> </option>
          {options}
        </select> 
        <h2>{currentBerry.name}</h2>
        <h2>{currentBerry.firmness? currentBerry.firmness.name: null}</h2>
    
      </div>
    );
  }
}
