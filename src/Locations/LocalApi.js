import axios from 'axios'


const location = async (url) => {
 const local = await axios(url)
 console.log(local.data)
 return local.data
}

const locationUrl = async () => {
    const rsp = await axios("https://pokeapi.co/api/v2/location")
    return rsp.data.results
}
const locationscheck = {
    location,
    locationUrl
}
export default locationscheck