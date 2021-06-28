

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'Lux', year: 2015},
];



const comments = [
    {text:'Love this!',id:523423},
    {text:'Super good',id:823423},
    {text:'You are the best',id:203942},
    {text:'Ramen is my fav food ever',id:123523},
    {text:'Nice Nice Nice!',id:542328},
]


//Some and Every Checks
//Array.prototype.some()//is at least one person

const isAdult = people.some((person) => {
    const year =  (new Date()).getFullYear();
    if (year - person.year >= 19) {
        console.log(`${person.name} cumple con la edad`)
    }else{
        console.log('Aun estas chavo :v');
    }
});

//  Array.prototype.every()  //is everyone 19?
 
const allPeople = people.every((person) => ((new Date()).getFullYear()) - person.year >= 19);
console.log(allPeople);

//Array.prototype.find()
/**Find the comment withe the ID of 823423 */

const idComment = comments.find(idComment1 => idComment1.id === 823423);
console.log(idComment);


//Array.prototype.findIndex()
// delete the comment with the ID of 823423
// Nuestra solución
const idFind = comments.findIndex(idComment2 => idComment2.id === 823423 );
console.log(idFind);

const nuevoArreglo = [...comments];
const idDelete = nuevoArreglo.splice(idFind, 1);

console.log(comments);
console.log(nuevoArreglo);
//La solución del video
/* 
    const index = comments.findIndex(comment => comment.id === 823423 );
    console.log(index;)

    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ];
*/






