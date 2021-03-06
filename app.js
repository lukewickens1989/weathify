// Initialize Storage Class
const storage = new Storage()
//Gets stored location data
const weatherLocation = storage.getLocationData()
// Initialize the Weather Class
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Initialize the UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


// Change Location Event
document.getElementById("w-change-btn").addEventListener('click', (e) => {
    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    weather.changeLocation(city, country)

    storage.setLocationData(city, country)

    getWeather();
    $('#locModal').modal('hide');
});

function getWeather() {
weather.getWeather()
  .then(results => {
    ui.paint(results)
    console.log(results)
  })
  .catch(err => console.log(err));
}