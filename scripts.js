document.addEventListener('DOMContentLoaded', ()=> {
    createGrid()
})

function createGrid() {
    let rows = 16;
    let cols = 16;
    const grid_container = document.querySelector('#grid-container');

    for(let i = 0; i < (rows * cols); i++) {
        const eachDiv = document.createElement('div');
        eachDiv.style.width = `${600 / cols}px`;
        eachDiv.style.height = `${600 / rows}px`;
        eachDiv.className = 'grid';

        eachDiv.addEventListener('mouseover', setColor);

        grid_container.appendChild(eachDiv);
    }
}

function setColor() {
    this.style.backgroundColor = 'black';
}

