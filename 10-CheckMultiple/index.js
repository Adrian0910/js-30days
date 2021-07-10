const boxSelect = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function boxCheck(e) {
    
    let inBetween = false;
   
     if (e.shiftKey && this.checked) {
        // go ahead an do what we please
        //loop pver every single checkbox
        boxSelect.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

boxSelect.forEach(checkbox  => checkbox.addEventListener('click', boxCheck));
