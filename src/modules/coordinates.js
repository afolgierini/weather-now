import { getWeather } from "./weather"

export const getCoordinates = async (location) => {   
    try {
        let coordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=4e32fe686f9174ced15dc7d9d5725636`)
        
        return await coordinates.json().then((res) => {
            document.querySelector('.location').innerText = res[0].name;
            getWeather(res[0].lat, res[0].lon)
        })  

    } catch (err) {
        console.log('ERROR: '+ err)
    }
}

getCoordinates('sao paulo')