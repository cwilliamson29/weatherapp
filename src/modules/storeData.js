import Weather from './getWeather.js'
import { currentDOM, extForecastDOM, forecastDOM } from './dom.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function storeData(loc, co) {
    const currentWrap = document.getElementById('current_wrap');
    const wrap5Hour = document.getElementById('wrap5Hour');
    const extwrap = document.getElementById('extwrap');
    removeAllChildNodes(currentWrap);
    removeAllChildNodes(wrap5Hour);
    removeAllChildNodes(extwrap);

    const weatherData = await Weather(loc, co);
    currentDOM(weatherData);
    set5Hour(weatherData);
    setExtForcast(weatherData);

    //console.log(weatherData);
}

function set5Hour(obj) {
    const wrap5Hour = document.getElementById('wrap5Hour');

    for (let i = 0; i < 3;) {
        forecastDOM(wrap5Hour, obj, i);
        ++i;
    }
}

function setExtForcast(obj) {
    const extwrap = document.getElementById('extwrap');
    //console.log(obj.cast.hourly.length)
    for (let i = 0; i < obj.cast.hourly.length;) {
        extForecastDOM(extwrap, obj, i);
        ++i;
    }
}

export default storeData;