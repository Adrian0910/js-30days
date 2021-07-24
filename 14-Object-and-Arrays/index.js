

// strings, numbers and booleans

 let age = 100;
let age2 = age;

console.log(age, age2);

age = 200;
console.log(age, age2); 


//let's say we have an array
// const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//and we want to make a copy of it
const team = players;
console.log(players);
console.log(team) */

// you might think we can just do something like this;
/* team[3]= 'Lux';
console.log(team) */
//... mucho texto

// we take a copy instead
/* const team2 = players.slice(); */

//or create a new array ND CONCAT the old in
/* const team3 = [].concat(players); */

// on use the new ES6 spread
/* const team4 = [...players];
team4[3] = 'heee haaaw';
console.log(team4);

const team5 = Array.from(players); 

//now when we update it, the original one isn't changed


//with objects
const person = {
    name: 'Wes Bos',
    age: 34,
}

//and think we make a copy:
const personC = [...person]
console.log(personC)
console.log('hola')






