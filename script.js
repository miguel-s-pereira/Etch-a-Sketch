let color = 'black';
let click = true;

const container = document.getElementById('container');
const grid = document.querySelector('.grid');
const userInput = document.getElementById('user-input');
const reset = document.querySelector('.reset-board');

function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
    let amount = size * size; 
    for(let i = 0; i < amount; i++){
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', squareColor)
        grid.insertAdjacentElement('beforeend', square);
    }
};

makeGrid(16);

function changeSize(input){
if(input >=2 && input <= 100){
    makeGrid(input);
}else{
    console.log('Maximum exceeded: 100');
}
}

function squareColor(){
if(click){
    if(color === 'random'){
        this.style.backgroundColor = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    }else{
        this.style.backgroundColor = color;
    }
}
}

function changeColor(choice){
    color = choice;
}

function resetGrid(){
    const grid = document.querySelector('.grid');
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor ='white');
}

document.querySelector('body').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
    if(click){
        document.getElementById('coloring').textContent = 'Click to enable and disable coloring: ON';
    }else{
        document.getElementById('coloring').textContent = 'Click to enable and disable coloring: OFF';
    }
    }
});

