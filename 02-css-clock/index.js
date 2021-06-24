
<<<<<<< HEAD
/* 
    ¿Como vamos a hacer eso?
    - Crear una funcion que añada el estilo
*/
=======
const hora = document.querySelector('.hour-hand');
const minuto = document.querySelector('.main-hand');
const segundo = document.querySelector('.second-hand');

const setDate = function(){
    const tiempo = new Date();
    const segundos = tiempo.getSeconds();
    const segundosGrados = ((segundos / 60) * 360) + 90;
    segundo.style.transform = `rotate(${segundosGrados}deg)`;

    
    
    const minutos = tiempo.getMinutes();
    const minutosGrados = ((minutos / 60) * 360) + 90;
    minuto.style.transform = `rotate(${minutosGrados}deg)`;    

    const horas = tiempo.getHours();
   const horasGrados = ((horas / 12) * 360) + 90;
   hora.style.transform = `rotate(${horasGrados}deg)`;    
   
}

setInterval(setDate, 1000);

>>>>>>> 031d930e98ab215a51fc2a27d26c4f2296760413

const hora = document.querySelector('.hour-hand');
const minuto = document.querySelector('.min-hand');
const segundo = document.querySelector('.second-hand');

const setDate = function(){
    const tiempo = new Date();
    const segundos = tiempo.getSeconds();
    const segundosGrados = ((segundos / 60) * 360) + 90;
    segundo.style.transform = `rotate(${segundosGrados}deg)`;
    console.log(segundosGrados)
    
    const minutos = tiempo.getMinutes();
    const minutosGrados = ((minutos / 60) * 360) + 90;
    minuto.style.transform = `rotate(${minutosGrados}deg)`;    

    const horas = tiempo.getHours();
    const horasGrados = ((horas / 12) * 360) + 90;
    hora.style.transform = `rotate(${horasGrados}deg)`;    
}

setInterval(setDate, 1000);

