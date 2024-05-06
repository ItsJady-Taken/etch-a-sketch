// after the DOM is loaded
document.addEventListener('DOMContentLoaded', ()=> { 
    // call function
    createGrid(16);
    
})

// Function that create a grid of divs and an argument of 'size' to change value of square perside
function createGrid(size) {
    const grid_container = document.querySelector('#grid-container');
    const gridSize = size * size; 

    for(let i = 0; i < gridSize; i++) {
        const eachDiv = document.createElement('div');
        eachDiv.style.width = `${600 / size}px`;
        eachDiv.style.height = `${600 / size}px`;
        eachDiv.className = 'grid';

        eachDiv.addEventListener('mouseover', setColor);

        grid_container.appendChild(eachDiv);
    }
}

function setColor() {
    this.style.backgroundColor = 'black'; 
}

function changeColor(color) {
    color = prompt("Choose a color:")
     if(color == "") {
        alert("You didn't enter a color!")
    }
    else if(!isNaN(color)) {
        alert(`${color} is not a color!`);
    }
    else {
        const grids = document.querySelectorAll('.grid');;
        grids.forEach(grid => {
            grid.addEventListener('mouseover', ()=>{ 
                grid.style.backgroundColor = color;
            })     
        });
    } 
}

function randomize() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);  
        grid.addEventListener('mouseover', ()=> {
            grid.style.backgroundColor = randomColor;
        })
    });  
}


// popup 
function changeSize() {
    const num = prompt("Enter number between 1 and 100:");
    if(num == ""){
        alert("You didn't enter a number!")
    }
    else if(isNaN(num)){
        alert(`${num} is not a number!`)
           
    }
    else if(num <= 0 || num > 100) {
        alert("Only numbers between 1 and 100!")
        return false
    }
    else{
        removeGrid();
    }
   return createGrid(num);
}

// delete grid when user create a new grid. I learn this part from others
function removeGrid() {
    const grid_container = document.querySelector('#grid-container');
    while(grid_container.firstChild) {
        grid_container.removeChild(grid_container.firstChild);
    }
}

function resetGrid() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}

