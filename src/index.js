import storeData from './modules/storeData'

function toCelsius(temp) {
    let num = temp.substring(0, temp.length - 1);
    let cel = (num - 32) * 5 / 9;
    return Math.round(cel) + '°';
}

function toFahren(temp) {
    let num = temp.substring(0, temp.length - 1);
    let fah = (num * 9 / 5) + 32;
    return Math.round(fah) + '°';
}

function changeUnit(unit) {
    if (unit === "cel") {
        const curtemp = document.getElementById('curtemp');
        const temps = document.querySelectorAll('.temp');
        const extTemp = document.querySelectorAll('#extTemp')
        curtemp.innerText = toCelsius(curtemp.innerText);

        temps.forEach(tem => {
            tem.innerText = toCelsius(tem.innerText)
        })

        extTemp.forEach(temp => {
            temp.innerText = toCelsius(temp.innerText)
        })
        chgCelFah = 'fah';
    } else if (unit === "fah") {
        const curtemp = document.getElementById('curtemp');
        const temps = document.querySelectorAll('.temp');
        const extTemp = document.querySelectorAll('#extTemp')
        curtemp.innerText = toFahren(curtemp.innerText);

        temps.forEach(tem => {
            tem.innerText = toFahren(tem.innerText)
        })

        extTemp.forEach(temp => {
            temp.innerText = toFahren(temp.innerText)
        })
        chgCelFah = 'cel';
    }

}

const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const changeTemp = 'cel';
searchBtn.addEventListener('click', () => {
    searchBar.style.boxShadow = ""
    const search = searchBar.value;
    storeData(search, 'usa');
});

function loadPage() {
    const search = searchBar.value;
    storeData(search, 'usa');
    changeUnit()
};

let chgCelFah = 'cel';
const celFah = document.getElementById('celFah');
celFah.addEventListener('click', () => {
    changeUnit(chgCelFah);
})

loadPage();