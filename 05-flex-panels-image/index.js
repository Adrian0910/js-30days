
const panels = document.querySelectorAll(".panel");



const imageOpen = function(){
    // console.log('hello')
    this.classList.toggle('open');
    // this.classList.toggle('open-active');
}

const imageTransform = function(e){
    
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', imageOpen));
panels.forEach(panel => panel.addEventListener('transitionend', imageTransform));

