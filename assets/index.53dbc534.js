(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=()=>`
    <div class="location-search">
    <input type="text" class="location-input" placeholder="Search location...">
    <div class="search-btn">
      <img class="search-icon" src="./magnifying-glass.png" alt="">
    </div>
    </div>

    <div class="main-content">
        <div class="location">
        S\xE3o Paulo
        </div>
        <div class="weather">
        <div class="temperature">22</div>
        <div class="celcius">\xB0 C</div>
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
        <div class="item-data">30\xB0C</div>
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
    `,l=async(c,n)=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${c}&lon=${n}&appid=4e32fe686f9174ced15dc7d9d5725636&units=metric`)).json().then(i=>{document.querySelector(".temperature").innerText=i.main.temp.toFixed(),document.querySelector(".description-text").innerText=i.weather[0].description.charAt(0).toUpperCase()+i.weather[0].description.slice(1),document.querySelector(".thermal-sensation .item-data").innerText=`${i.main.feels_like.toFixed()} \xB0C`,document.querySelector(".humidity .item-data").innerText=`${i.main.humidity} %`,document.querySelector(".wind-speed .item-data").innerText=`${(i.wind.speed*3.6).toFixed(1)} km/h`,document.querySelector(".location-input").value=""})}catch(o){console.log("ERROR: "+o)}},s=async c=>{try{return await(await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${c}&limit=1&appid=4e32fe686f9174ced15dc7d9d5725636`)).json().then(o=>{document.querySelector(".location").innerText=o[0].name,l(o[0].lat,o[0].lon)})}catch(n){console.log("ERROR: "+n)}};s("sao paulo");document.querySelector("#app").innerHTML=d();const r=document.querySelector(".location-input");r.addEventListener("keypress",c=>{c.key==="Enter"&&s(r.value)});document.querySelector(".search-btn").addEventListener("mouseup",c=>{s(r.value)});
