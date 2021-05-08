function convertDay(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    num
    for (let i = 0; i < 7;) {
        if (num === i) {
            return days[num];
        }
        ++i
    }
}

function currentDOM(obj) {
    const currentWrap = document.getElementById('current_wrap');

    const city = document.createElement('div');
    const temp = document.createElement('div');
    const hiLo = document.createElement('div');
    const weat = document.createElement('div');
    const icon = document.createElement('div');

    city.setAttribute('id', 'curcity');
    city.innerText = obj.current.city;

    temp.setAttribute('id', 'curtemp');
    temp.innerText = Math.round(obj.current.temp) + '°';

    hiLo.setAttribute('id', 'curhiLo');
    hiLo.innerText = Math.round(obj.current.hi) + '°' + '/' + Math.round(obj.current.lo) + '°';

    weat.setAttribute('id', 'curcurrentWeather');
    weat.innerText = obj.current.weather;

    const ic = obj.current.icon;
    icon.setAttribute('id', 'curicon');
    const icImg = document.createElement('img');
    icImg.src = `http://openweathermap.org/img/wn/${ic}@2x.png`
    icon.appendChild(icImg);

    currentWrap.appendChild(city);
    currentWrap.appendChild(temp);
    currentWrap.appendChild(hiLo);
    currentWrap.appendChild(weat);
    currentWrap.appendChild(icon);
}

function forecastDOM(cont, obj, a) {
    const hourWrap = document.createElement('div');
    hourWrap.setAttribute('id', 'hourWrap')
    const city = document.createElement('div');
    const day = document.createElement('div')
    const date = document.createElement('div');
    const time = document.createElement('div');
    const temp = document.createElement('div');
    const weat = document.createElement('div');
    const icon = document.createElement('div');

    city.setAttribute('id', 'city');
    city.innerText = obj.cast.city;

    day.setAttribute('id', 'day');
    let dt = new Date(obj.cast.hourly[a].date);

    day.innerText = convertDay(dt.getDay());

    date.setAttribute('id', 'date');
    date.innerHTML = obj.cast.hourly[a].date;

    time.setAttribute('id', 'time');
    time.innerText = obj.cast.hourly[a].time;

    temp.setAttribute('id', 'temp');
    temp.setAttribute('class', 'temp');
    temp.innerText = obj.cast.hourly[a].temp;

    weat.setAttribute('id', 'currentWeather');
    weat.innerText = obj.cast.hourly[a].weather;

    const ic = obj.cast.hourly[a].wea_icon;
    icon.setAttribute('id', 'icon');
    const icImg = document.createElement('img');
    icImg.src = `http://openweathermap.org/img/wn/${ic}@2x.png`
    icon.appendChild(icImg);

    cont.appendChild(hourWrap)
    hourWrap.appendChild(city);
    hourWrap.appendChild(day)
    hourWrap.appendChild(date);
    hourWrap.appendChild(time);
    hourWrap.appendChild(temp);
    hourWrap.appendChild(weat);
    hourWrap.appendChild(icon);
}

function extForecastDOM(cont, obj, a) {
    const hourWrap = document.createElement('div');
    hourWrap.setAttribute('id', 'extHourWrap')
    const city = document.createElement('div');
    const day = document.createElement('div')
    const date = document.createElement('div');
    const time = document.createElement('div');
    const temp = document.createElement('div');
    const weat = document.createElement('div');
    const icon = document.createElement('div');

    city.setAttribute('id', 'extCity');
    city.innerText = obj.cast.city;

    day.setAttribute('id', 'extDay');
    let dt = new Date(obj.cast.hourly[a].date);

    day.innerText = convertDay(dt.getDay());

    date.setAttribute('id', 'extDate');
    date.innerHTML = obj.cast.hourly[a].date;

    time.setAttribute('id', 'extTime');
    time.innerText = obj.cast.hourly[a].time;

    temp.setAttribute('id', 'extTemp');
    temp.innerText = obj.cast.hourly[a].temp; //  '°'

    weat.setAttribute('id', 'extCurrentWeather');
    weat.innerText = obj.cast.hourly[a].weather;

    const ic = obj.cast.hourly[a].wea_icon;
    icon.setAttribute('id', 'extIcon');
    const icImg = document.createElement('img');
    icImg.src = `http://openweathermap.org/img/wn/${ic}@2x.png`
    icon.appendChild(icImg);

    cont.appendChild(hourWrap)
    hourWrap.appendChild(city);

    const dayWrap = document.createElement('div');
    dayWrap.setAttribute('id', 'dayWrap');
    hourWrap.appendChild(dayWrap)
    hourWrap.appendChild(time);

    const weatWrap = document.createElement('div');
    weatWrap.setAttribute('id', 'weatWrap');
    hourWrap.appendChild(weatWrap)
    hourWrap.appendChild(temp);

    weatWrap.appendChild(weat);
    weatWrap.appendChild(icon);

    dayWrap.appendChild(day)
    dayWrap.appendChild(date);
}

export { currentDOM, extForecastDOM, forecastDOM }