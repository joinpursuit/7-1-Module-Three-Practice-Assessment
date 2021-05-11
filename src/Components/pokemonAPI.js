import axios from "axios";

const getBerries = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/berry/");
  return data.results;
};

const getLocations = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/location/");
  return data.results.map((location) => location.name);
};

const pokemonAPIs = {
  getBerries,
  getLocations,
};

export default pokemonAPIs;
