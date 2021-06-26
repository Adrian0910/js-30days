
/**
 * En este ejercicio solo vamos a necesitar el archivo de JS y HTML.
 * Consiste en implementar lss diferentes funciones que existen en los arreglos.
 */

<<<<<<< HEAD
const inventors = [
=======
 const inventors = [
>>>>>>> 6f864771251bc86bcf6598d6a72ad2a97d8a9af0
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];


const people =['Beck, Glenn','Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick','Beecher,Henry',
'Beethoven, Ludwig','Begin,Menachen','Belloc,Hilaire','Bellow,Saul','Benchley,Robert','Benenson,Peter',
'Ben-Gurion,Dvid','Benjamin,Walter','Benn,Tony','Bennington,Chester','Benson,Leana','Bent,Silas',
'Bentsen,Lloyd','Berger,Ric','Bergman,Ingmar','Berio,Luciano','Berle,Milton','Berlin,Irving',
'Berne, Eric','Bernhard,Sandra','Berra,Yogi','Berry,Halle','Berry, Wendell','Bethea,Erin','Bevan,Aneurin',
'Bevel,Ken','Biden,Joseph','Bierce,Ambrose','Biko,Steve','Billings,Josh','Biondo,Frank',
'Birrel,Augustine', 'Black,Elk','Blair, Robert','Blair,Tony','Blake, William'
];

//Array prototype filter()
//1. Filter the list of inventors for those who were born in the 1500's

/**El return de un arrow funtion estga implicito */
const inventor1 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600 ));
console.table(inventor1);


//Array.prototype.map()
//2. Give us an array of the inventory first and last name

const copyName = inventors.map(name => { 
    return `${name.first} ${name.last}`;   
});
console.log(copyName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const birthdate = inventors.sort((a, b) => {
    if (a.year > b.year ) {
        return 1;
    }else {
        return -1;
    }
});
console.log(birthdate)

// Array.prototype.reduce()
//4. How many years did all the inventors live

const lifeInventors = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
},0);
console.log(lifeInventors);

/** 5. Sort the inventors by years livedcosnt  */

const orderDate = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if (lastGuy > nextGuy) {
        return -1;
    }else{
        return 1;
    }
})

console.log(orderDate);


/** 6. Create a list of boulevards in paris that contain 'de' anywhere in the same
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 */

/* 
const category = document.querySelector('.mw-category');
const link = Array.from(category.querySelector('a'));


const de = link
    .map(link => link.textContent)
    .filter(streetName => streetName.includes('de')); */



//7. Sort exercise
//Sort the people alphabetically by last name

const orderAlphabet = people.sort((a, b) => {

});
console.log(people.sort());


// 8. Reduce Exrecise
// Sum up the instance of each of these

const data = ['car', 'car', 'trunck', 'trunck', 'bike', 'walk', 'car', 'van', 'bike',
        'walk', 'car', 'van', 'car', 'truck'];


const repeatWord = data.reduce((totalW, word) => {
    if (!totalW[word]) {
        totalW[word] = 0;
    }
    totalW[word]++;
    return totalW;
},{});
<<<<<<< HEAD
console.log(repeatWord);


=======
console.log(repeatWord);
>>>>>>> 6f864771251bc86bcf6598d6a72ad2a97d8a9af0
