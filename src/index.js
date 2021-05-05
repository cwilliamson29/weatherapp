const search = "dallas, ga";
const searchUK = "london, uk";

async function getWeatherUSA(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=110409e1bb98c0085bb402fb53f95f29`, { mode: 'cors' })
    const weaData = await response.json();

    console.log(weaData)
}
async function getWeather(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=110409e1bb98c0085bb402fb53f95f29`, { mode: 'cors' })
    const weaData = await response.json();
    console.log(weaData)
}
getWeatherUSA(search)
getWeather(searchUK)