window.onload = function() {

    const day = document.getElementById('selectDay')
    const month = document.getElementById('selectMonth')
    const year = document.getElementById('selectYear')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();

    function getDay() {
        for (let i = 0; i <= 31; i++) {
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

    getDay();
    getMonth(months);
    getYear();

}

