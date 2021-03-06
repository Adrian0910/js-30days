const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')
msg.text = document.querySelector('[name="text"]').value

const populateVoices = function() {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    .filter((voice) => voice.lang.includes('es'))
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`,
    )
    .join('')
}

const setVoice = function() {
    msg.voice = voices.find( voice => voice.name === this.value );
    toggle();
}

const toggle = function(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

const setOption = function() {
    msg[this.name] = this.value;
    toggle();
}


speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach( (option) => option.addEventListener('change', setOption) );
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click',()=> toggle(false));


