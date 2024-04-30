document.addEventListener('DOMContentLoaded', ()=> {
    //Create a div 16x16 grid
    let row = 16;
    let column = 16;
    for(let i=0; i<row; i++) {
        for(let j=0; j<column; j++) {
            const newDiv = document.createElement('div');
            newDiv.className = 'grid';
            
            document.querySelector('#grid-contain').append(newDiv);
        }
    }
   
    
    

})