/** 
 * 
 * ¿Como vamos a hacer eso estupida?
 * - Crear una funcion que cambie los estilos
 * 
 * Usamos CSS y JS para poder cambiar el valor del
 * Spacing
 * Blur
 * Base Color
 * 
*/

/**
 * Requerimos el uso de nodeList para poder hacer los cambios en las variables del css
 */
const input = document.querySelectorAll('.controls input')

const handleUpdate = function(){
    const suffix= this.dataset.sizing || ''; /** debe ir con la condición || debido a que el color no tiene sizing */
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)/**setProperty es para cambiar el valor de una propiedad de CSS */
}

input.forEach(input =>input.addEventListener('change',handleUpdate));
input.forEach(input =>input.addEventListener('mousemove',handleUpdate));


