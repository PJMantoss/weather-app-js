const api = {
    key: "0fadf96d2336ead026424b46f3be5560",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);


const setQuery = e => {
    if(e.keyCode === 13){
        
    }
}