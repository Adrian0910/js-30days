

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((position) => {
    console.log(position); 
    speed.textContent = `${position.coords.speed} m/s`;   
    arrow.style.transform = `rotate(${position.coords.heading}deg)`;
    }, err => {
        console.log(err);
        alert('Error');
    });


