//psuedocode
// I want to open a webpage and input the location so that I can see the weather forecast
//-form iput for user and event listener for submit
var submitButton = document.querySelector('.searchBtn');
submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    var citySearch = document.querySelector("#city-search").value;
    fetchAPI(citySearch)
});

var weatherDetails = document.querySelectorAll(".card-text");
var weatherTitle = document.querySelectorAll(".card-title");
var weatherIcon = document.querySelectorAll(".weather-icon");
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
        weatherTitle[0].textContent = "City :"+data.name
           weatherDetails[0].textContent = "Temp:" + data.main.temp
           weatherDetails[1].textContent = "Wind:" + data.wind.speed
           weatherDetails[2].textContent = "Humidity:" + data.main.humidity
           weatherIcon[0].setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey  + "&units=imperial")
                .then(function (response) {
                    return response.json()
                })
                .then(function(fiveDay){
                    console.log(fiveDay);
                    let j = 3;
                    let z=1;
                    for (let i = 0; i<fiveDay.list.length; i = i+8){
                        weatherTitle[z].textContent = fiveDay.list[i].dt_txt
                        weatherDetails[j].textContent = "Temp:" + fiveDay.list[i].main.temp
                        weatherDetails[j+1].textContent = "Wind:" + fiveDay.list[i].wind.speed
                        weatherDetails[j+2].textContent = "Humidity:" + fiveDay.list[i].main.humidity
                        weatherIcon[z].setAttribute("src", `https://openweathermap.org/img/wn/${fiveDay.list[i].weather[0].icon}@2x.png`)
                        j+=3
                        z++
                    }
                })
        })
}
// fetchGeoCode("Denver")
// var locationEl = //value input by the user
// var latitudeEL = //value linked to the location chosen
// var longitudeEl = //value linked to the location chosen

// var urlApi = //url to fetch the weather data
// var searchEl = []; //open array so arguments can be passed in based on user input on the form