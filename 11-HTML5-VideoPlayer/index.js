/* Get our elements */
const player = document.querySelector('.player')
const video = document.querySelector('.viewer')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const playerButton = document.querySelector('.toggle')
const nextBackButtons = document.querySelectorAll('[data-skip]')
const volumSpeedSlider = document.querySelectorAll('.player__slider')

/* Build out functions */

const volumenSpeed = function () {
  video[this.name] = this.value
  /* console.log(this.name);
    console.log(this.value); */
}

const time = function () {
  //   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip)
  if (video.currentTime >= 90.093424) {
    video.load()
    video.play()
  }
}

const play = function () {
  if (video.paused) {
    video.play()
    playerButton.textContent = '❚ ❚'
  } else {
    video.pause()
    playerButton.textContent = '►'
  }
}

const barritaNavegacion = function () {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

const barClick = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

/* Hook up the event listners */

volumSpeedSlider.forEach((elemento) =>
  elemento.addEventListener('change', volumenSpeed),
)
volumSpeedSlider.forEach((elemento) =>
  elemento.addEventListener('mousemove', volumenSpeed),
)

video.addEventListener('click', play)
video.addEventListener('timeupdate', barritaNavegacion)

playerButton.addEventListener('click', play)
nextBackButtons.forEach((elemento) => elemento.addEventListener('click', time))

let mousedown = false
progress.addEventListener('click', barClick)
progress.addEventListener('mousemove', (e) => mousedown && barClick(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
