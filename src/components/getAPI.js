import axios from "axios";

const getFirmness = (url) => {
  const { data } = axios.get(url);
  console.log(data)
  return data.firmness.name
};

const getBerries = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/berry/");
  const berries = data.results.map((berry) => {
    const oneberry = {
      name: berry.name,
      firmness: getFirmness(berry.url),
    };
    console.log(oneberry)
  });
//   console.log(berries);
};

const pokeApI = {
  getBerries,
};
getBerries();
getFirmness();

export default pokeApI;
