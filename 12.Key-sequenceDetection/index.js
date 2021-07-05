const allCode = [];
const secretCode = 'hola';

const konamiCode = function(e){

allCode.push(e.key);    
// console.log(allCode);
allCode.splice(-secretCode.length - 1, allCode.length - secretCode.length);
console.log(allCode);
    if (allCode.join('').includes(secretCode)) {
        console.log('DING DING');
        cornify_add({ younicorns: "12,957,826,716,386" });

    }
}

window.addEventListener('keyup', konamiCode);
