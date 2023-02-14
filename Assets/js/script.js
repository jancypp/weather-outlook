//psuedocode
// I want to open a webpage and input the location so that I can see the weather forecast
//-form iput for user and event listener for submit
var submitButton = document.querySelector('.btn');
submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var citySearch = document.querySelector("#city-search");
    fetchAPI(citySearch.value)
});

//I want current weather for that loction to display
//-fetch/response/data weather API
//-data fetched should include current weather, icon, temperature, humidity, and wind speed
//I want 5-day forecast for that loction to display
//-fetch/response/data weather API
// 5-day forecast, icon, temperature, humidity, and wind speed
//I want my location/weather search history to be saved for future reference so that when I click on my search history it shows me the current and future conditions
//-local storage for search history
//-the page will re-render the location with the latest conditions - reload or cache

var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}"
var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid={API key}"
// var cityName = "Denver"; // this will change based on input from user queryselector on that element and .value
var apiKey = '76da3a89b569c9135f00102c38749d0d'; //api key associated with my openweather account

var fetchAPI = function (cityName) {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=imperial")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey  + "&units=imperial")
                .then(function (response) {
                    return response.json()
                })
                .then(function(fiveDay){
                    console.log(fiveDay);
                })
        })
}
// fetchGeoCode("Denver")
// var locationEl = //value input by the user
// var latitudeEL = //value linked to the location chosen
// var longitudeEl = //value linked to the location chosen

// var urlApi = //url to fetch the weather data
// var searchEl = []; //open array so arguments can be passed in based on user input on the form