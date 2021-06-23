
const hora = document.querySelector('.hour-hand');
const minuto = document.querySelector('.main-hand');
const segundo = document.querySelector('.second-hand');

const setDate = function(){
    const tiempo = new Date();
    const segundos = tiempo.getSeconds();
}

setInterval(setDate, 1000);



