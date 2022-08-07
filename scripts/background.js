const dates = new Date();
const times = dates.getHours();
const timeID= (4 / 24 * times);

let greet_array = [
    'night',
    'morning',
    'afternoon',
    'evening',
    'night'
]
let greet = greet_array[Math.floor(timeID)];

function randomNum (max){
    return Math.floor(Math.random() * max)
}

let slidesCounter  = randomNum (20)
const nextSlideBtn = document.querySelector ('.slide-next')
const prevSlideBtn = document.querySelector ('.slide-prev')

nextSlideBtn.addEventListener ('click', function (slide) {
    slidesCounter++
    if (slidesCounter === 20) {
        slidesCounter = 0
    }
    setBg ()
})


prevSlideBtn.addEventListener ('click', function (slide) {
    slidesCounter--
    if (slidesCounter < 0) {
        slidesCounter = 20
    }
    setBg ()
})

setBg ()
function setBg () {
    const body = document.querySelector ('body')
    const img  = new Image ();
    let number = slidesCounter;

    if (slidesCounter < 10) {
        number = '0' + number
    } else {
        number = slidesCounter
    }
    if (number === '00') {
        number = '01'
    }
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${greet}/${number}.jpg`
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    };
}