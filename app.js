const container = document.querySelector('.container')
const title = document.querySelector('.title')
const cover = document.querySelector('.cover')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const audio = document.querySelector('.audio')
const prevBtn = document.querySelector('.prev')
const playBtn = document.querySelector('.play')
const nextBtn = document.querySelector('.next')
const voiceControl = document.querySelector('.voice-control')

const songs = [
  'Ending - Isak Danielson',
  'Heather - Conan Gray',
  'Osmonlarda - Xamdam Sobirov',
  'U okna - HammAli & Navai',
]

let indexSong = 0

playSong(songs[indexSong])

function playSong(song) {
  title.textContent = song
  cover.src = `./album/${song}.jpg`
  audio.src = `./music/${song}.mp3`
}

function play() {
  container.classList.add('play')
  playBtn.innerHTML = '<i class="fas fa-pause"></i>'
  audio.play()
}

function pause() {
  container.classList.remove('play')
  playBtn.innerHTML = '<i class="fas fa-play"></i>'
  audio.pause()
}

function playMusic() {
  const isPlay = container.classList.contains('play')
  if (isPlay) {
    pause()
  } else {
    play()
  }
}

function next() {
  indexSong++

  if (indexSong > songs.length - 1) {
    indexSong = 0
  }
  playSong(songs[indexSong])
  play()
}

function prevMusic() {
  indexSong--;

  if (indexSong < 0 ) {
    indexSong = songs.length - 1;
  }
  playSong(songs[indexSong]);
  play();
}

function voiceChange(e) {
  audio.volume = e.target.value / 100
}


function updateProgress() {
  const duration = audio.duration
  const currentTime = audio.currentTime
  const persentage = (currentTime / duration) * 100
  progress.style.width = `${persentage}%`
}


prevBtn.addEventListener("click", prevMusic);
playBtn.addEventListener('click', playMusic)
nextBtn.addEventListener('click', next)
voiceControl.addEventListener('input', voiceChange)
audio.addEventListener('timeupdate', updateProgress)
