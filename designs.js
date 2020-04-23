// Let's define some variables for us to manipulate later
const gridColour = document.querySelector('#colorPicker');
const gridRow = document.querySelector('#inputHeight');
const gridHeight = document.querySelector('#inputWidth');
const pixelcanvas=document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    for (row=1; row<=gridRow; row++) {
        let newrow = document.createElement ('tr');
        for (column=1; column<=gridHeight; column++) {
            let newcolumn = document.createElement('td');
            let pixelgrid= newrow.appendChild(newcolumn);
        }
    }
    let newtable = pixelcanvas.appendChild(pixelgrid);

};
    l
// Your code goes here!
document.querySelector('#submission').addEventListener('click', makeGrid);
