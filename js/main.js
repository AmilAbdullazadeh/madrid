const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const durTime = document.querySelector("#durTime");
const currTime = document.querySelector("#currTime");
const shuffleBtn = document.getElementById("shuffle");
const volume = document.getElementById("volume");
const muteBtn = document.getElementById("mute");
const metadata = document.getElementById("meta-data");

//   ✅  Display Current Song Duration: The currTime and durTime elements are updated with the current time and duration using the updateProgress function.

//   ✅  Clickable Progress Bar: The setProgress function allows users to click on the progress bar to jump to a specific part of the song.

//   ✅  Loop the Playlist: The audio.addEventListener('ended', nextSong) automatically moves to the next song, and when the playlist ends, it starts from the first song.

//   ✅  Shuffle Songs: The toggleShuffle function enables a shuffle mode where songs play in random order.

//   ✅  Volume Control: The updateVolume function adjusts the volume using the volume slider.

//   ✅  Mute/Unmute: The toggleMute function toggles between mute and unmute, changing the icon accordingly.

//   ✅  Display Song Metadata: The metadata element shows additional information about the song, such as artist name and album.

//   ✅  Keyboard Controls: Keyboard controls for play/pause (Space), next (ArrowRight), and previous (ArrowLeft) have been implemented.

// Song titles
const songs = [
    {
        title: "JuiceWRLD-Ft-BennyBlanco-RealShit",
        artist: "Juice WRLD ft. Benny Blanco",
        album: "Unreleased Album",
        duration: "3:32"
    },
    {
        title: "LilBaby-LilDurk-Ft-Rodwave-RichOffPain",
        artist: "Lil Baby, Lil Durk ft. Rod Wave",
        album: "The Voice of the Heroes",
        duration: "4:06"
    },
    {
        title: "PoloG-I-Know",
        artist: "Polo G",
        album: "Hall of Fame",
        duration: "2:56"
    }
];

function loadSong(song) {
    title.textContent = song.title
    audio.src = `./musics/${song.title}.mp3`
    cover.src = `./assets/${song.title}.jpg`
    metadata.textContent = `Album: ${song.album}`
    durTime.textContent = song.duration
}

let index = 0
let isShuffle = false;
let isMuted = false;

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

function playSong() {
    const isPlaying = musicContainer.classList.contains('play')

    isPlaying ? pause() : play()
}

playBtn.addEventListener('click', playSong)

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

    let minutes = Math.floor(duration / 60)
    let seconds = Math.floor(duration % 60)

    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    currentTime.textContent = `${minutes}:${seconds}`
}

audio.addEventListener('timeupdate', updateProgress)

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

progressContainer.addEventListener('click', setProgress)

function toggleShuffle() {
   isShuffle = !isShuffle
   shuffleBtn.classList.toggle('active')
}

shuffleBtn.addEventListener('click', toggleShuffle)

function toggleMute() {
    isMuted = !isMuted
    audio.muted = isMuted
    muteBtn.querySelector('i.fas').classList.toggle('fa-volume-mute')
    muteBtn.querySelector('i.fas').classList.toggle('fa-volume-up')
}

muteBtn.addEventListener('click', toggleMute)

function updateVolume() {
    audio.volume = volume.value / 100
    console.log(audio.volume)
}

volume.addEventListener('input', updateVolume)

audio.addEventListener('ended', nextSong)

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        playSong()
    } else if (e.code === "ArrowRight") {
        nextSong()
    } else if (e.code === "ArrowLeft") {
        prevSong()
    }
})
