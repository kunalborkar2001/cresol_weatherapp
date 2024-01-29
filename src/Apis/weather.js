import axios from "axios";

let weatherDetails = async (location) =>  {
    let response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=fb51f4f4b25543f6b21160802242901&q=${location}`)
    let data = await response.data
    return data
}

export default weatherDetails

