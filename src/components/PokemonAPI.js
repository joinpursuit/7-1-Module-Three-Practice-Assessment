import axios from "axios"

const callThisUrl = async (url) => {
    const rsp = await axios(url)
    return rsp.data
}
const pokemon = async (input) => {
    try {
        const rsp = await axios(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase().trim()}`)
        return rsp.data
    } catch (err) {
        return "error"
    }
}

const location = async () => {
    const rsp = await axios("https://pokeapi.co/api/v2/location")
    return rsp.data.results
}
const berry = async () => {
    const rsp = await axios("https://pokeapi.co/api/v2/berry")
    return rsp.data.results
}

const pokemonAPI = {
    callThisUrl,
    pokemon,
    location,
    berry
}
export default pokemonAPI