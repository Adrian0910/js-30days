const speak = document.querySelector('.words');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;


let p = document.createElement('p');
speak.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            speak.appendChild(p);
        }
        if (transcript.includes('gato')) {
            p.textContent = transcript + '🐈';
            console.log('🐈');
        }
});

recognition.addEventListener('end', recognition.start);

recognition.start();

/* print hello world */



