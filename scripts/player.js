const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#revPlay");
let playItem = document.querySelector(".play-item")

const playList =  [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
        duration: '00:40'
    },
    {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:51'
    },
];
let trackProps = {
    onAir: false,
    position: 0,
    src: '',
    volume: '',
    prevVolume: '',
    muted: false,
    currentTime: 0
};

let audio = new Audio();
audio.src = playList[0].src;
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.add("pause")
        playItem.classList.add("item-active")
    } else {
        audio.pause();
        playBtn.classList.remove("pause")
        playItem.classList.remove("item-active")
    }

})
