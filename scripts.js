// after the DOM is loaded
document.addEventListener('DOMContentLoaded', ()=> { 
    // call function
    createGrid(16);
    const size_btn = document.querySelector('#size-btn');
    size_btn.addEventListener('click', ()=> {
        let size = changeSize()
        createGrid(size)
    })

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
    }
   return createGrid(num);
}

