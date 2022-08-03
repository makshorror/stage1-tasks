const playBtn = document.querySelector("#playPlay");
const nextPlayBtn = document.querySelector("#nextPlay");
const prevPlayBtn = document.querySelector("#revPlay");

const playList =  [
    {
    title: 'Aqua Caelestis',
    src: '../assets/sound/Aqua Caelestis.mp3',
    duration: '00:40'
    },
    {
        title: 'River Flows In You',
        src: '../assets/sound/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sound/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'Summer Wind',
        src: '../assets/sound/Summer Wind.mp3',
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