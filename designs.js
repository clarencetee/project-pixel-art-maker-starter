// Let's define some variables for us to manipulate later
const pixelcanvas=document.querySelector('#pixelCanvas');
let gridColor = document.querySelector('#colorPicker').value //if nth is selected it should still be set black


// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    event.preventDefault();
    
    const gridRow = document.querySelector('#inputHeight').value;
    const gridColumn = document.querySelector('#inputWidth').value;
         
    for (var i=0; i<gridRow; i++) {
        const row = document.createElement ('tr');
        for (var j=1; j<=gridColumn; j++) {
            const column = document.createElement('td');
            row.appendChild(column);
        }
    var section = row;
    const newtable=pixelcanvas.appendChild(section);
    }
    document.querySelector('#submission').setAttribute('disabled', 'true');
};


// Your code goes here!
document.querySelector('#sizePicker').addEventListener('submit', makeGrid);
document.querySelector('#colorPicker').addEventListener('change', function() {
    gridColor = document.querySelector('#colorPicker').value;
});

pixelcanvas.addEventListener('click', function(evt) {
    if (evt.target.nodeName === 'TD') {
        evt.target.style.backgroundColor=gridColor;
    }
});

