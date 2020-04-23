// Let's define some variables for us to manipulate later
const gridColour = document.querySelector('#colorPicker').value;
const gridRow = document.querySelector('#inputHeight').value;
const gridColumn = document.querySelector('#inputWidth').value;
const pixelcanvas=document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    for (var row=1; row<=gridRow; row++) {
        let newrow = document.createElement ('tr');
        for (var column=1; column<=gridColumn; column++) {
            let newcolumn = document.createElement('td');
            let pixelgrid= newrow.appendChild(newcolumn);
        }
    }
    let newtable = pixelcanvas.appendChild(pixelgrid);

};

// Your code goes here!
document.querySelector('#submission').addEventListener('click', makeGrid);
