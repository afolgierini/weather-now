export const getWeather = async (lat, lon) => {
    try {
        let currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e32fe686f9174ced15dc7d9d5725636&units=metric`)
        
        return await currentWeather.json().then((res) => {    
            document.querySelector('.temperature').innerText = res.main.temp.toFixed();
            document.querySelector('.description-text').innerText = res.weather[0].description.charAt(0).toUpperCase() + res.weather[0].description.slice(1);
            document.querySelector('.thermal-sensation .item-data').innerText = `${res.main.feels_like.toFixed()} °C`;
            document.querySelector('.humidity .item-data').innerText = `${res.main.humidity} %`;
            document.querySelector('.wind-speed .item-data').innerText = `${(res.wind.speed * 3.6).toFixed(1)} km/h`;

            document.querySelector('.location-input'). value = ''
        })
        
    } catch (err) {
        console.log('ERROR: ' + err)
    }
}
