

const dogs = [{ name: 'Copito', age: 2}, { name: 'Ugu', age: 1 }];

const makeGreen = function(){
    const p = document.querySelector('p');
    p.style.color = 'BADA55';
    p.style.fontSize = '50px';
}

// Interpolated
console.log('Hello I am a %s string!', '💩🍔')

//styled
console.log('%c You are awesome', 'font-size:50px');

// warning
console.warn('Oh no!');

// error
console.error('error!!!!');

// info
console.info('Some info');

//testing
console.assert(1 === 2,'This not a number')



//clearing
// console.clear();

//viewing DOM Elements
/* console.log(p);
console.dir(p); */

//Grouping togheter
dogs.forEach(dog => {
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} years old`);
    console.groupEnd(`${dog.name}`);
    
})

// counting
console.count('wes')

// timing 
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

//table
console.table(dogs);




