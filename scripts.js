 
document.addEventListener('DOMContentLoaded', ()=> {
    // call the function
    CreateGrid(16)
})

function CreateGrid(size) {
     //Create a div 16x16 grid
    const grid_size = document.querySelector('#grid-container');

    grid_size.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_size.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let eachSize = size * size;
   
    for(let i=0; i<eachSize; i++) {
    
        const newDiv = document.createElement('div');
        newDiv.className = 'grid';
        newDiv.addEventListener('mouseover', setColor);

        document.querySelector('#grid-container').append(newDiv);
        
    } 
}

function setColor() {
    this.style.background = 'black'
}

