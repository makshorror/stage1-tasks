const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#prevPlay");
let playItem = document.querySelector(".play-item")
const track1 = document.querySelector("#track1");
const track2 = document.querySelector("#track2");
const track3 = document.querySelector("#track3");
const track4 = document.querySelector("#track4");
let audio = new Audio();
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
//Audio src
audio.src = playList[trackProps.position].src;



//Play and Pause
playBtn.addEventListener("click", playPause)
function playPause() {
    if (trackProps.onAir === false) {
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
        playItem.classList.add("item-active")
    } else {
        audio.pause();
        trackProps.onAir = false;
        playBtn.classList.remove("pause")
    }
}

//Next Button
nextPlayBtn.addEventListener('click', () => {
    if (trackProps.position < 3) {
        trackProps.position = trackProps.position + 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        playBtn.classList.add("pause")
    } else {
        trackProps.position = 0;
        audio.src = playList[trackProps.position].src;
        audio.play();
    }
})

//Prev Button
prevPlayBtn.addEventListener('click', () => {
    if (trackProps.position === 0) {
        trackProps.position = 3;
        audio.src = playList[trackProps.position].src;
        audio.play();
    } else {
        trackProps.position = trackProps.position - 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        playBtn.classList.add("pause")
    }
})


