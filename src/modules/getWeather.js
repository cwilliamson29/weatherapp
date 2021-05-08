import storeData from './storeData'

async function Weather(loc, co) {
    if (co === "usa") {
        const current = await getWeatherUSA(loc);
        //.catch(console.error + "dude dammmmnnnn!")
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
            time: '', //time[1],
            temp: Math.round(obj.list[i].main.temp) + '°',
            weather: obj.list[i].weather[0].main,
            wea_desc: obj.list[i].weather[0].description,
            wea_icon: obj.list[i].weather[0].icon,
            wea_id: obj.list[i].weather[0].id
        };
        if (time[1] > "12:00:00") {
            let Pm = time[1].split(':');
            let PMhour = (Pm[0] - 12) + ':' + Pm[1] + ' PM';
            //console.log(Pm + "    " + PMhour)
            cast.hourly[i].time = PMhour;
        } else if (time[1] === "12:00:00") {
            let noon = time[1].split(':');
            let noonNum = noon[0] + ':' + noon[1] + " PM";
            cast.hourly[i].time = noonNum;
        } else {
            let am = time[1].split(':');

            if (am[0] === "00") {
                am[0] = '12';
            }

            if (am[0].charAt(0) === '0') {
                am[0] = am[0].substring(1);
            }

            let AMhour = am[0] + ':' + am[1] + ' AM';
            //console.log(am + "    " + AMhour)
            cast.hourly[i].time = AMhour;
        }
        i++;
    }
    return cast;
}

async function getWeatherUSA(loc) {
    let usaWea;
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc},usa&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
        const res = await response.json();
        usaWea = await new SetWeatherData(res.name, res.main.temp, res.main.feels_like, res.main.humidity, res.main.temp_max, res.main.temp_min, res.weather[0].main, res.weather[0].icon);

    } catch (e) {
        console.log(e + " : Invalid Location, Try Again!")
        const searchBar = document.getElementById('searchBar');
        searchBar.value = "Invalid Location, Try Again!";
        searchBar.style.boxShadow = "0 0 10px 1px red inset"

        return storeData("Atlanta, GA", "usa");

    }
    return usaWea;
}

async function getForecastUSA(loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc},usa&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`, { mode: 'cors' })
    const res = await response.json();
    const res2 = await new setForecastData(res);
    return res2
}

export default Weather;