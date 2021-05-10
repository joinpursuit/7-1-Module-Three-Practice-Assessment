import axios from "axios";

const loadBerries = async () => {
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/berry/`);
        return data.results.map((berry) => berry.name)
    }catch(e){
        alert(`Error occured: ${e.message}`)
    }
}


const APICalls = {
    loadBerries,

}

export default APICalls