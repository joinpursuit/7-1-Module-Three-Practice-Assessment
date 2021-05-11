import axios from 'axios'


const berry = async (url)=> {
 const berr = await axios(url)
 console.log(berr.data)
 return berr.data
}
const berriesUrl= async () => {
    const berryss = await axios("https://pokeapi.co/api/v2/pokemon/berry")
    console.log(berryss)
    return berryss.data.results
}



const berries = {
    berry,
    berriesUrl
}
export default berries