import storeData from './modules/storeData'

let cty = 'usa';

const USABtn = document.getElementById('searchUSA');
USABtn.addEventListener('click', () => {
    cty = 'usa';
    console.log(cty)
})

const otherBtn = document.getElementById('searchOther');
otherBtn.addEventListener('click', () => {
    cty = 'other';
    console.log(cty)
})

const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    const search = searchBar.value;
    storeData(search, cty);
});

function loadPage() {
    const search = searchBar.value;
    storeData(search, cty);
};

loadPage();