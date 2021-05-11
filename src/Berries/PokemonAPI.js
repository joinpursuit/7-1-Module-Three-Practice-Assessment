import axios from "axios"

const getBerries =  async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/berry/`)
    return res.data.results.map((berryObj) => berryObj.name)
}

const PokemonAPI = {
    getBerries,
}

export default PokemonAPI