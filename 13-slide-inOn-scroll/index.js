
const debounce = function(func, wait = 10, inmediate = true){

    let timeout;
    return function(){
        let context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!inmediate) func.apply(context, args);
        };
    let callNow = inmediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
    };    
};


const image = document.querySelectorAll('.slide-in');

const checkSlide = function(e){
    image.forEach(image => {
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) -
        image.height / 2;
        //bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotscrolledPast = window.scrollY < imageBottom;
        
        if (isHalfShown && isNotscrolledPast) {
            image.classList.add('active');
        }else{
            image.classList.remove('active');
        }

    });
}

window.addEventListener('scroll',debounce(checkSlide));
