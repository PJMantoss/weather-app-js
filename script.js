const api = {
    key: "0fadf96d2336ead026424b46f3be5560",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');



const setQuery = e => {
    if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

const getResults = query => {
    fetch(`${api.base}weather?q=${query}&unit=metric&APPID=${api.key}`)
      .then(weather => {
          return weather.json();
      }).then(displayResults);
}

const displayResults = weather => {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`

    let weather_desc = document.querySelector('.current .weather');
    weather_desc.innerText = weather.weather[0].main;
}

const dateBuilder = d => {
    let months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;
}

searchBox.addEventListener('keypress', setQuery);