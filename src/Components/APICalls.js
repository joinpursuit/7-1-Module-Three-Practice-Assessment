import axios from "axios";

const loadBerries = async () => {
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/`);
        return data.results;
    }catch(e){
        alert(`Error occured in Loading Berries: ${e.message}`)
    }
}

const getFirmness = async (url) => {
    try{
        const {data} = await axios.get(url);
        return data;
    }catch(e){
        alert(`Error occured in getting firmness: ${e.message}`)
    }
}

const locations = async () => {
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/location`);
        return data.results
    }catch(e){
        alert(`Error occured in getting firmness: ${e.message}`)
    }
}

const getPokemon = async (endpoint) => {
    try{
        const pokemon = []
        const {data} =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${endpoint}`);

        switch(true){
            case endpoint === "":
                return `Enter valid name or ID`
            case endpoint === data.name:
                pokemon.push(data.name);
                pokemon.push(data.sprites.front_default);
                pokemon.push(data.id);
                return pokemon;
            case !isNaN(endpoint):
                pokemon.push(data.name)
                pokemon.push(data.sprites.front_default)
                pokemon.push(data.id)
                return pokemon
            default:
                return `Pokemon not found! Try another name or ID`
        }

    }catch(e){
        alert(`Error occured in getting pokemon: ${e.message}`)
        return `Pokemon not found! Try another name or ID`
    }
}
const APICalls = {
    loadBerries,
    getFirmness,
    locations,
    getPokemon
}

export default APICalls