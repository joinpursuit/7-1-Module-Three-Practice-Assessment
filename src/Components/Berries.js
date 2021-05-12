import axios from "axios";
import React, { Component } from "react";

export default class Berries extends Component {
  constructor() {
    super();
    this.state = {
      berries: [],
      selectedValue: "",
      currentBerry: {},
      flavors: []
    };
  }

  getBerries = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/berry");
    //console.log(data.results);
    this.setState({
      berries: data.results,
    });
  };
  handleChange = async (e) => {
    this.setState({
      selectedValue: e.target.value,
    });
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/berry/${e.target.value}`
    );
    //console.log(data);
    this.setState({
      currentBerry: data,
      flavors: data.flavors
    });
    //console.log(this.state.currentBerry.flavors[0].flavor.name);
  };
  componentDidMount() {
    this.getBerries();
  }
  render() {
    const { berries, selectedValue, currentBerry, flavors } = this.state;
    const options = berries.map((berry, i) => {
      return (
        <option key={i} value={berry.name}>
          {berry.name}
        </option>
      );
    });

    console.log(this.state.flavors)
    //console.log(this.state.flavors.flavor.name)

    //     const listItems = locations.map((loc, i) =>
    //     <li key={i}> {loc}</li>
    // )

    //const berryFlavors = currentBerry.flavors
    //console.log(currentBerry)
    // const berryFlavors = flavors.map((flavor, i) => {
    //   return <li key={i}>{flavor.flavor.name}</li>;
    // });

    //console.log(berryFlavors)

    return (
      <div>
        <h1>Select a Type</h1>
        <select
          onChange={this.handleChange}
          value={selectedValue}
          name=""
          id=""
        >
          <option value=""></option>
          {options}
        </select>
        <h1>{currentBerry.firmness ? currentBerry.firmness.name : null} </h1>
        <h1>{currentBerry.name}</h1>
        {/* <ul>
             {currentBerry.firmness ? currentBerry.flavors.forEach((flavor, i) => {
     return <li key={i}>{flavor}</li>; }) : null}
        </ul> */}
       
        {/* <p>{currentBerry.flavors[0].flavor.name}</p> */}
      </div>
    );
  }
}
