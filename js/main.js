const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const durTime = document.querySelector("#durTime");
const currTime = document.querySelector("#currTime");

// Song titles

const songs = [
    "JuiceWRLD-Ft-BennyBlanco-RealShit",
    "LilBaby-LilDurk-Ft-Rodwave-RichOffPain",
    "PoloG-I-Know"
];


function loadSong(song) {
    title.innerText = song
    audio.src = `./musics/${song}.mp3`
    cover.src = `./assets/${song}.jpg`
}

let index = 0

loadSong(songs[index])

function play() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.add("fa-pause")
    playBtn.querySelector('i.fas').classList.remove("fa-play")
}

function pause() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove("fa-pause")
    playBtn.querySelector('i.fas').classList.add("fa-play")
}

playBtn.addEventListener('click', () => {
    let isPlaying = musicContainer.classList.contains('play')
    isPlaying ? pause() : play()
})

function prevSong() {
    index --

    if (index < 0) {
        index = songs.length - 1
    }

    loadSong(songs[index])

    play()
}

function nextSong() {
    index ++

    if (index > songs.length - 1) {
        index = 0
    }

    loadSong(songs[index])

    play()
}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    let progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)
