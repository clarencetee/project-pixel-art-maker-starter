// Let's define some variables for us to manipulate later
const pixelcanvas=document.querySelector('#pixelCanvas');
let gridColor = document.querySelector('#colorPicker').value //if nth is selected it should still be set black


// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    event.preventDefault(); //to supress page reloading which can be the default submit action

    if (document.querySelectorAll('td').length ===0) { //this is to prevent 'submit' from stacking tables on tables
        const gridRow = document.querySelector('#inputHeight').value;
        const gridColumn = document.querySelector('#inputWidth').value;
            
        for (var i=0; i<gridRow; i++) {
            const row = document.createElement ('tr');
            for (var j=1; j<=gridColumn; j++) {
                const column = document.createElement('td');
                column.addEventListener('click', function (evt) {
                    evt.target.style.backgroundColor=gridColor
                });
                row.appendChild(column);
            }
        const newtable=pixelcanvas.appendChild(row);
        }
    }

    else { //the alternative conditional checks to see if a cell is highlighted already
        const tablecells = document.querySelectorAll('td');
        for (let i=0; i<tablecells.length; i++) {
                if (tablecells[i].style.backgroundColor) {
                    tablecells[i].style.backgroundColor='rgb(255,255,255)';
                }           
            }
        }
    
};

// Your code goes here!
document.querySelector('#colorPicker').addEventListener('change', function() {
    gridColor = document.querySelector('#colorPicker').value;
});

document.querySelector('#sizePicker').addEventListener('submit', makeGrid);

