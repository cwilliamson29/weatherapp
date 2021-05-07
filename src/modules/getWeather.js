let wdata;

async function Weather(loc, co) {
    if (co === "usa") {
        const current = await getWeatherUSA(loc);
        const cast = await getForecastUSA(loc);
        return { current, cast }
    } else {
        const current = await getWeather(loc);
        const cast = await getForecast(loc);
        return { current, cast }
    }
}

function SetWeatherData(city, temp, feels, hum, hi, lo, weather, icon) {
    return { city, temp, feels, hum, hi, lo, weather, icon };
}

function setForecastData(obj) {

    let cast = {};
    cast.city = obj.city.name;
    cast.hourly = [];
    for (let i = 0; i < obj.list.length;) {
        let time = obj.list[i].dt_txt.split(" ");
        cast.hourly[i] = {
            date: time[0],
            time: time[1],
            temp: obj.list[i].main.temp,
            weather: obj.list[i].weather[0].main,
            wea_desc: obj.list[i].weather[0].description,
            wea_icon: obj.list[i].weather[0].icon,
            wea_id: obj.list[i].weather[0].id
        };
        i++;
    }
    return cast;
}

async function getWeatherUSA(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc},usa&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
    const res = await response.json();
    //console.log(res)
    const usaWea = await new SetWeatherData(res.name, res.main.temp, res.main.feels_like, res.main.humidity, res.main.temp_max, res.main.temp_min, res.weather[0].main, res.weather[0].icon);
    return usaWea;
}

async function getWeather(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
    const res = await response.json();
    const wea = await new SetWeatherData(res.name, res.main.temp, res.main.feels_like, res.main.humidity, res.main.temp_max, res.main.temp_min, res.weather[0].main, res.weather[0].icon);
    return wea
}
async function getForecastUSA(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc},usa&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
    const res = await response.json();
    const res2 = await new setForecastData(res);
    return res2
}
async function getForecast(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
    const res = await response.json();
    const res2 = await new setForecastData(res);
    return res2
}

export default Weather;