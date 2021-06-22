/* 
    ¿COMO VAMOS A HACER ESO ESTUPIDA?
    - ponerle el sonido a cada div
    - musica() => evento onKey()

*/
// Para cuando oprimamos la tecla
const eresEstupido = function(){
  const keys2 = document.querySelector('.keys') 
    const estupido = document.createElement('p');
    estupido.classList.add('estupido');
    estupido.innerHTML = '<p> Eres estupido</p>'
    keys2.appendChild(estupido);

    if (!estupido) {
        
    }
    setTimeout(() => {
        estupido.remove();
      }, 1000);
}

const playMusic = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const audioError = document.querySelector('.error');
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // Si el audio es distinto al null tocamos!
  if (audio != null) {
    audio.play();
    key.classList.add('playing')
    audio.currentTime = 0
    //sino error!!!!
  } else {
    audioError.play();
    eresEstupido();
  }
}


//constante para obtener clase
const keys = document.querySelectorAll('.key')

// Ejecutar cuando acabe la animación
const removeTransition = function (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playMusic);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
