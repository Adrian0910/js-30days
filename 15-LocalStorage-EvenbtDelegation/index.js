

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];


const newPlate = function(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false,
    };
    items.push(item)
    printPlates(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

const printPlates = function( plates = [], itemsList){
    
    itemsList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>    
            <label for="item${i}">${plate.text}</label>
        </li>
    `
    }).join('');
    
}

const toogleDone = function(e){
    if (!e.target.matches('input'))return; 
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items));
    printPlates(items, itemsList);
}



addItems.addEventListener('submit', newPlate)
itemsList.addEventListener('click', toogleDone)
printPlates(items, itemsList);

