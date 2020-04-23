// Let's define some variables for us to manipulate later
const gridColour = document.querySelector('#colorPicker').value;
const gridRow = document.querySelector('#inputHeight').value;
const gridColumn = document.querySelector('#inputWidth').value;
const pixelcanvas=document.querySelector('#pixelCanvas');


// When size is submitted by the user, call makeGrid()

function makeGrid() {
    for (var row=1; row<=gridRow; row++) {
        const newrow = document.createElement ('tr');
        for (var column=1; column<=gridColumn; column++) {
            const newcolumn = document.createElement('td');
            const section= newrow.appendChild(newcolumn);
        }
        newrow.appendChild(section);
    }
    const newtable = pixelcanvas.appendChild(pixelgrid);

};


function test (){
    console.log("test");
};

// Your code goes here!
document.querySelector('#sizePicker').addEventListener('submit', test);

