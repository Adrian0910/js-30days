const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const sortedBands = document.querySelector('#bands');

const replace = function(a){
    return a.replace(/^(a |the |an )/i,'').trim();
}

const orderSort = bands.sort( (a, b) => replace(a) > replace(b) ? 1 : -1);

const orderEach = orderSort.forEach( (element) => {
    sortedBands.innerHTML += `
        <li>${element}</li>
    `;    
})






