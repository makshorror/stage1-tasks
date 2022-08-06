const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#prevPlay");
const muteBtn = document.querySelector('#mute');
const volumeRange = document.querySelector('#volumeRange');
const playItem = document.querySelectorAll(".play-item");

let audio = new Audio();

const playList =  [
    {
        title: 'Aqua Caelestis',
        src: './assets/sounds/Aqua Caelestis.mp3',
        duration: '00:39'
    },
    {
        title: 'River Flows In You',
        src: './assets/sounds/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Ennio Morricone',
        src: './assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'Summer Wind',
        src: './assets/sounds/Summer Wind.mp3',
        duration: '01:50'
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


audio.src = playList[trackProps.position].src;
let track = document.createElement("input")
track.type = "range";
track.min = "0"
track.max = "100"
track.value = "0"
track.className = "timeTrack";


//Audio click
document.getElementById("track1").addEventListener('click', () => {
    trackProps.position = 0;
    playItem[1].textContent = `${playList[1].title}`
    playItem[2].textContent = `${playList[2].title}`
    playItem[3].textContent = `${playList[3].title}`
    playItem[1].classList.remove('item-active')
    playItem[2].classList.remove('item-active')
    playItem[3].classList.remove('item-active')
    playItem[1].classList.remove('item-noactive')
    playItem[2].classList.remove('item-noactive')
    playItem[3].classList.remove('item-noactive')
})

document.getElementById("track2").addEventListener('click', () => {
    trackProps.position = 1;
    playItem[0].textContent = `${playList[0].title}`
    playItem[2].textContent = `${playList[2].title}`
    playItem[3].textContent = `${playList[3].title}`
    playItem[0].classList.remove('item-active')
    playItem[2].classList.remove('item-active')
    playItem[3].classList.remove('item-active')
    playItem[0].classList.remove('item-noactive')
    playItem[2].classList.remove('item-noactive')
    playItem[3].classList.remove('item-noactive')
})

//Play and Pause
function playPause() {
    if (trackProps.onAir === false) {
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
        playItem[trackProps.position].classList.remove('item-noactive')
        playItem[trackProps.position].classList.add('item-active')
        playItem[trackProps.position].after(track)
    } else {
        audio.pause();
        trackProps.onAir = false;
        playBtn.classList.remove("pause")
        playItem[trackProps.position].classList.remove('item-active')
        playItem[trackProps.position].classList.add('item-noactive')
    }
}

playBtn.addEventListener("click", playPause)


//Next Button
function nextBtn() {

    if (trackProps.position < 3) {
        trackProps.onAir = true;
        trackProps.position = trackProps.position + 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        playBtn.classList.add("pause")
        playItem[trackProps.position - 1].classList.remove('item-active')
        playItem[trackProps.position - 1].classList.remove('item-noactive')
        playItem[trackProps.position].classList.add('item-active')
        playItem[trackProps.position].after(track)
        playItem[trackProps.position - 1].textContent = `${playList[trackProps.position - 1].title}`


    } else {
        trackProps.position = 0;
        trackProps.onAir = true;
        audio.src = playList[trackProps.position].src;
        audio.play();
        trackProps.muted = true;
        playBtn.classList.add("pause")
        playItem[3].classList.remove('item-active')
        playItem[3].classList.remove('item-noactive')
        playItem[trackProps.position].classList.add('item-active')
        playItem[trackProps.position].after(track)
        playItem[3].textContent = `${playList[3].title}`
    }

}

nextPlayBtn.addEventListener('click', nextBtn)


//Prev Button
function prevBtn() {
    if (trackProps.position === 0) {
        trackProps.position = 3;
        audio.src = playList[trackProps.position].src;
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
        playItem[0].classList.remove('item-active')
        playItem[0].classList.remove('item-noactive')
        playItem[trackProps.position].classList.add('item-active')
        playItem[trackProps.position].after(track)
        playItem[0].textContent = `${playList[0].title}`
    } else {
        trackProps.position = trackProps.position - 1;
        audio.src = playList[trackProps.position].src;
        audio.play();
        trackProps.onAir = true;
        playBtn.classList.add("pause")
        playItem[trackProps.position + 1].classList.remove('item-active')
        playItem[trackProps.position + 1].classList.remove('item-noactive')
        playItem[trackProps.position].classList.add('item-active')
        playItem[trackProps.position].after(track)
        playItem[trackProps.position + 1].textContent = `${playList[trackProps.position + 1].title}`
    }
}

prevPlayBtn.addEventListener('click', prevBtn)


//Mute Button
function mute() {
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
}

muteBtn.addEventListener("click", mute)


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
timer = setInterval(track.oninput = function () {
    track.max = audio.duration;
    trackProps.currentTime = audio.currentTime;
    track.value = trackProps.currentTime;
    curTime()
    if (Math.floor(audio.duration) <= audio.currentTime) {
        nextBtn()
    }
}, 0)

track.oninput = function () {
    audio.currentTime = track.value;
    curTime()
}


// Current Time and Duration
function curTime() {
    let current = Math.floor(audio.currentTime);
    let dur = Math.floor(audio.duration);
    let minuteCurrent = Math.floor(current / 60);
    let secondCurrent = Math.floor(current % 60);
    let minuteDur = Math.floor(dur / 60);
    let secondDur = Math.floor(dur % 60);

    if (secondCurrent < 10) secondCurrent = "0" + secondCurrent;
    if (secondDur < 10) secondDur = "0" + secondDur;
    playItem[trackProps.position].textContent = `${playList[trackProps.position].title} ${minuteCurrent}:${secondCurrent}/${minuteDur}:${secondDur}`
}