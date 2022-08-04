const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#prevPlay");
const muteBtn = document.querySelector('#mute');
const progressBar = document.querySelector('#timeTrack');
const volumeRange = document.querySelector('#volumeRange');
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
//Audio click
track1.addEventListener("click",() => {
    trackProps.position = 0;
    trackProps.onAir = true;
    audio.src = playList[trackProps.position].src;
    audio.play();
    playBtn.classList.add("pause");
    trackProps.onAir = true;
})
track2.addEventListener("click",() => {
    trackProps.position = 1;
    trackProps.onAir = true;
    audio.src = playList[trackProps.position].src;
    audio.play();
    playBtn.classList.add("pause")
})
track3.addEventListener("click",() => {
    trackProps.position = 2;
    trackProps.onAir = true;
    audio.src = playList[trackProps.position].src;
    audio.play();
    playBtn.classList.add("pause")
})
track4.addEventListener("click",() => {
    trackProps.position = 3;
    trackProps.onAir = true;
    audio.src = playList[trackProps.position].src;
    audio.play();
    playBtn.classList.add("pause")
})


//Play and Pause
audio.src = playList[trackProps.position].src;
playBtn.addEventListener("click", playPause)
function playPause() {
    if (trackProps.onAir === false) {
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
    } else {
        audio.pause();
        trackProps.onAir = false;
        playBtn.classList.remove("pause")
    }
}


//Next Button
nextPlayBtn.addEventListener('click', () => {
    if (trackProps.position < 3) {
        trackProps.onAir = true;
        trackProps.position = trackProps.position + 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        playBtn.classList.add("pause")
    } else {
        trackProps.position = 0;
        trackProps.onAir = true;
        audio.src = playList[trackProps.position].src;
        trackProps.muted = true;
        playBtn.classList.add("pause")
    }
})


//Prev Button
prevPlayBtn.addEventListener('click', () => {
    if (trackProps.position === 0) {
        trackProps.position = 3;
        audio.src = playList[trackProps.position].src;
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
    } else {
        trackProps.position = trackProps.position - 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
    }
})


//Mute Button
muteBtn.addEventListener("click",() =>{
    if (trackProps.muted === false) {
        trackProps.muted = true
        muteBtn.classList.remove("play-minvolume");
        muteBtn.classList.remove("play-mediumvolume");
        muteBtn.classList.remove("play-maxvolume");
        muteBtn.classList.add("play-mute")
        volumeRange.value = 0;
        trackProps.volume = 0;
        audio.volume = 0;
    } else {
        if (trackProps.prevVolume > 0 && trackProps.prevVolume < 0.4) {
            trackProps.muted = false
            muteBtn.classList.remove("play-mute")
            muteBtn.classList.remove("play-mediumvolume")
            muteBtn.classList.remove("play-maxvolume")
            muteBtn.classList.add("play-minvolume");
            trackProps.volume = trackProps.prevVolume * 100;
            volumeRange.value = trackProps.prevVolume * 100;
            audio.volume = trackProps.prevVolume;
        } else if (trackProps.prevVolume > 0.4 && trackProps.prevVolume < 0.8) {
            trackProps.muted = false
            muteBtn.classList.remove("play-mute")
            muteBtn.classList.remove("play-minvolume")
            muteBtn.classList.remove("play-maxvolume")
            muteBtn.classList.add("play-mediumvolume");
            trackProps.volume = trackProps.prevVolume * 100;
            volumeRange.value = trackProps.prevVolume * 100;
            audio.volume = trackProps.prevVolume;
        } else {
            trackProps.muted = false
            muteBtn.classList.remove("play-mute")
            muteBtn.classList.remove("play-minvolume")
            muteBtn.classList.remove("play-mediumvolume")
            muteBtn.classList.add("play-maxvolume");
            trackProps.volume = trackProps.prevVolume * 100;
            volumeRange.value = trackProps.prevVolume * 100;
            audio.volume = trackProps.prevVolume;
        }
    }
})


//Volume Control
volumeRange.oninput = function(){
trackProps.volume = volumeRange.value / 100;
audio.volume = trackProps.volume;
    if (trackProps.volume === 0){
        trackProps.muted = true
        muteBtn.classList.remove("play-minvolume");
        muteBtn.classList.remove("play-mediumvolume");
        muteBtn.classList.remove("play-maxvolume");
        muteBtn.classList.add("play-mute")
    } else if (trackProps.volume > 0 && trackProps.volume < 0.4) {
        trackProps.muted = false
        muteBtn.classList.remove("play-mute")
        muteBtn.classList.remove("play-mediumvolume")
        muteBtn.classList.remove("play-maxvolume")
        trackProps.prevVolume = trackProps.volume;
        muteBtn.classList.add("play-minvolume");
    } else if (trackProps.volume > 0.4 && trackProps.volume < 0.8) {
        trackProps.muted = false
        muteBtn.classList.remove("play-mute")
        muteBtn.classList.remove("play-minvolume")
        muteBtn.classList.remove("play-maxvolume")
        trackProps.prevVolume = trackProps.volume;
        muteBtn.classList.add("play-mediumvolume");
    } else {
        trackProps.muted = false
        muteBtn.classList.remove("play-mute")
        muteBtn.classList.remove("play-minvolume")
        muteBtn.classList.remove("play-mediumvolume")
        trackProps.prevVolume = trackProps.volume;
        muteBtn.classList.add("play-maxvolume");
    }
}


//Progress Bar
timer = setInterval(progressBar.oninput = function () {
    progressBar.max = audio.duration;
    trackProps.currentTime = audio.currentTime;
    progressBar.value = trackProps.currentTime;
}, 1000)

progressBar.oninput = function () {
    audio.currentTime = progressBar.value
}

