import axios from 'axios'


const PokeApi = async (url)=> {
 const poke = await axios(url)
 console.log(poke.data)
 return poke.data
}
const pokemonURl = async (input) => {
   try{
    const poke = await axios(`https://pokeapi.co/api/v2/pokemon/${input}`)
    return poke.data
   } catch(err){
       return 'error'
   }
    
}

const pokemon = {
    PokeApi,
    pokemonURl
}
export default pokemon