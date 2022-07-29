// //Name
let names = document.querySelector(".name");
let cities = document.querySelector(".city")

// cities.addEventListener("input", function (){
//     setLocalStorage("city", cities.value);
// })

names.addEventListener("input", function (){
    setLocalStorage("name", names.value);
})

if (names.value !== getLocalStorage("name")) names.value = getLocalStorage("name");
// if (cities.value !== getLocalStorage("city")) cities.value = getLocalStorage("city");

// LocalStorage //
function setLocalStorage(name,input) {
    localStorage.setItem(name, input);
}
//
function getLocalStorage(name) {
    return localStorage.getItem(name);
}
//

//Time and Date

window.onload = function () {
    const btn_ref = document.getElementById("change-quote");
    window.setInterval(function () {
            let date = new Date();
            let greeting;
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let day = date.getDay();
            let month = date.getMonth();
            let dates = date.getDate();

            let hello = date.getHours();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            if (hello <= 11 && 6 <= hello) {
                greeting = "Good morning";
            } else if (hello <= 17 && 12 <= hello) {
                greeting = "Good afternoon";
            } else if (hello <= 23 && 18 <= hello) {
                greeting = "Good evening";
            } else {
                greeting = "Good night";
            }


            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;


            document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
            document.getElementById("date").innerHTML = days[day] + ", " + months[month] + " " + dates;
            document.getElementById("greeting").innerHTML = greeting;
        },
        0);
    randomQuote();
    btn_ref.addEventListener("click", randomQuote);
};

//Quotes

let hints = [];
const hint = 'scripts/hints.json';
fetch (hint)
    .then (resp => {
        return resp.json ();
    })
    .then (data => hints = data);



function randomQuote() {
    let quotation = document.getElementById("quote");
    let source = document.getElementById("author");
    let random = hints[Math.floor(Math.random() * hints.length)];
    quotation.innerText = `“${random.quote}.”`;
    source.innerText = random.source;

}


//Weather




let city = "Minsk"
let searchInp = document.querySelector('#city')
document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let value = searchInp.value;
        if(!value) return false;
        city = value;
        init()
    }
})



let tempBlock = document.querySelector('#temp');
let descriptionBlock = document.querySelector('#weather-description');
let windBlock = document.querySelector('#wind');
let humidityBlock = document.querySelector('#humidity');
let iconBlock = document.querySelector('#icons');


function init() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ef7d1eab4a8990e718ef7a13bb2682b`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {

            let imgId = data['weather']['0']['icon'];
            iconBlock.innerHTML = `<img src='https://openweathermap.org/img/wn/${imgId}.png' alt="weather">`;
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
            init()
        })
}

init()


//Player
const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#revPlay");



let songIndex = 0;


