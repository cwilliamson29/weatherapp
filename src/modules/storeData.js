import Weather from './getWeather.js'
import { currentDOM } from './dom.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function storeData(loc, co) {
    const currentWrap = document.getElementById('current_wrap');
    removeAllChildNodes(currentWrap);

    const weatherData = await Weather(loc, co);
    currentDOM(weatherData);

    console.log(weatherData);
}

export default storeData;