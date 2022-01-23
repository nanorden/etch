let container = document.querySelector('#container');
let size = 10;



function makeGrid(){
    // creates a square grid with x by x demensions
    for (let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

    
        for (let i = 0; i < size; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
        
    }

    iterateHover();

}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function resetGrid(){
    const boxes = document.getElementsByClassName('box');
    for (let i = 0; i < size*size; i++){
        boxes[i].style.backgroundColor = 'white';
    }
    removeAllChildNodes(container);
    size = prompt('Choose Next Grid size');
    makeGrid(size);
    
}

function iterateHover(){
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < size*size; i++){
        boxes[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'black';
        });
    }
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    resetGrid();
})

makeGrid(10);

