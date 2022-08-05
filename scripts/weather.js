let searchInp = document.querySelector('.city');
let tempBlock = document.querySelector('#temp');
let descriptionBlock = document.querySelector('#weather-description');
let windBlock = document.querySelector('#wind');
let humidityBlock = document.querySelector('#humidity');
let city = localStorage.getItem("city");
let iconBlock = document.getElementById('icons');
if (localStorage.getItem("city") === null) {
    localStorage.setItem("city", "Minsk")
    searchInp.value = "Minsk"
    init()
}

if (localStorage.getItem("city") !== "") {
    searchInp.value = localStorage.getItem("city");
} else {
    searchInp.value = localStorage.getItem("city");
}



document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = searchInp.value;
        if(!value) return false;
        city = value;
        localStorage.setItem("city", searchInp.value)
        init()
    }
})



function init() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ef7d1eab4a8990e718ef7a13bb2682b`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            let idIcon = data['weather']['0']['id'];
            if (iconBlock.classList.length <= 2) {
                iconBlock.classList.add(`owf-${idIcon}`);
            } else {
                let removeIcon = iconBlock.classList.item(2)
                iconBlock.classList.remove(removeIcon);
                iconBlock.classList.add(`owf-${idIcon}`);
            }
            tempBlock.textContent = `${temperature()}°C`;
            descriptionBlock.textContent = `${data['weather']['0']['description']}`;
            windBlock.textContent = `Wind speed: ${windSpeed()} m/s`;
            humidityBlock.textContent = `Humidity: ${data['main']['humidity']}%`
            function windSpeed(){
                let speed = data['wind']['speed'];
                let wS = Math.floor(speed);
                return wS;
            }
            function temperature() {
                let getTemp = data.main.temp
                let tempC = Math.floor(getTemp) - 273
                return tempC
            }
        })
        .catch(() => {
            alert('This city not found')
            city = 'Minsk';
            searchInp.value = 'Minsk';
            init()
        })
}

init()