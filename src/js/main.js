import {nationalities} from './module/nationality.js';
// import animation from './module/animation';

window.onload = function() {

    new Vivus('imgVivus', {
        file: '../img/man.svg',
        onReady: function (myVivus) {
            myVivus.el.setAttribute('height', auto)
        }
    })

    
    const day = document.getElementById('selectDay')
    const month = document.getElementById('selectMonth')
    const year = document.getElementById('selectYear')
    const nation = document.getElementById('selectNat')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();

    function getDay() {
        for (let i = 1; i <= 31; i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = i
            item.innerHTML = i
            day.append(item)
        }
    }

    function getMonth() { 
        for (let i = 0; i < months.length; i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = months[i]
            item.innerHTML = months[i]
            month.append(item)
        }
    }

    function getYear() { 
        for (let i = 1920; i <= date.getFullYear(); i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = i
            item.innerHTML = i
            year.append(item)
        }
    }

    function getNationalyti() {
        for (let i = 0; i < nationalities.length; i++) {
            let item = document.createElement('option')
            item.className = 'item';
            item.value = nationalities[i]
            item.innerHTML = nationalities[i]
            nation.append(item)
        }
    }

    getDay();
    getMonth(months);
    getYear();
    getNationalyti(nationalities)


}

