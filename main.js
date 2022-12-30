import { defaultApp } from "./src/modules/defaultApp";
import { getCoordinates } from "./src/modules/coordinates";

document.querySelector('#app').innerHTML = defaultApp()

const locationInput = document.querySelector('.location-input');
locationInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') getCoordinates(locationInput.value)
})

document.querySelector('.search-btn').addEventListener('mouseup', e => {
  getCoordinates(locationInput.value)
})