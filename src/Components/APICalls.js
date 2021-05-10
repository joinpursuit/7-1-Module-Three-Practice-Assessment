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


const APICalls = {
    loadBerries,
    getFirmness
}

export default APICalls