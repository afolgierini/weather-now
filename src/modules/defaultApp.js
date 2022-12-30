export const defaultApp = () => {
    return `
    <div class="location-search">
    <input type="text" class="location-input" placeholder="Search location...">
    <div class="search-btn">
      <img class="search-icon" src="./magnifying-glass.png" alt="">
    </div>
    </div>

    <div class="main-content">
        <div class="location">
        São Paulo
        </div>
        <div class="weather">
        <div class="temperature">22</div>
        <div class="celcius">° C</div>
        </div>
        <div class="weather-description">
        <div class="description-text">Cloudy</div>
        </div>
    </div>


    <div class="additional-infos">
        <div class="thermal-sensation">
        <div class="item-description">
            <img class="item-icon" src="./icon-thermometer.png" alt="">
            <div class="item-text">Real feel</div>
        </div>
        <div class="item-data">30°C</div>
        </div>
        <div class="humidity">
        <div class="item-description">
            <img class="item-icon" src="./icon-humidity.png" alt="">
            <div class="item-text">Humidity</div>
        </div>
        <div class="item-data">40 %</div>
        </div>
        
        <div class="wind-speed">
        <div class="item-description">
            <img class="item-icon" src="./icon-wind.png" alt="">
            <div class="item-text">Wind speed</div>
        </div>
        <div class="item-data">20 km/h</div>
        </div>
    </div>  
    `
}


