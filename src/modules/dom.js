function currentDOM(obj) {
    const currentWrap = document.getElementById('current_wrap');

    const city = document.createElement('div');
    const temp = document.createElement('div');
    const hiLo = document.createElement('div');
    const weat = document.createElement('div');
    const icon = document.createElement('div');

    city.setAttribute('id', 'city');
    city.innerText = obj.current.city;

    temp.setAttribute('id', 'temp');
    temp.innerText = obj.current.temp;

    hiLo.setAttribute('id', 'hiLo');
    hiLo.innerText = 'high: ' + obj.current.hi + 'Low: ' + obj.current.lo;

    weat.setAttribute('id', 'currentWeather');
    weat.innerText = obj.current.weather;

    const ic = obj.current.icon;
    icon.setAttribute('id', 'icon');
    const icImg = document.createElement('img');
    icImg.src = `http://openweathermap.org/img/wn/${ic}@2x.png`
    icon.appendChild(icImg);

    currentWrap.appendChild(city);
    currentWrap.appendChild(temp);
    currentWrap.appendChild(hiLo);
    currentWrap.appendChild(weat);
    currentWrap.appendChild(icon);
}

export { currentDOM }