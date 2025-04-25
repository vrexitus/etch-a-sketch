const container = document.querySelector(".container");

let buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");
let button = document.createElement("button");
button.textContent = "GENERATE";
button.classList.add("resetButton");
buttonContainer.appendChild(button);
button.addEventListener("click", resetGrid);
container.appendChild(buttonContainer);


function generateGrid(numOfSquares) {
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("gridContainer");
    container.appendChild(gridContainer);
    for (let i = 1; i <= numOfSquares*numOfSquares; i++) {
        let gridItem = document.createElement("div");
        let color = random_rgba();
        gridItem.classList.add("gridItem");
        gridItem.style.flexBasis = "calc(100%/" + String(numOfSquares).toString() + ")";
        gridItem.addEventListener("mouseover", () => {
            var i = 0;
            if (gridItem.style.opacity != 0) {
                return ;
            }
            gridItem.style.opacity = 0;
            var k = window.setInterval(function() {
              if (i >= 10) {
                clearInterval(k);
              } else {
                gridItem.style.opacity = i / 10;
                i++;
              }
            }, 25);
        });
        gridContainer.appendChild(gridItem);
    }
    return (gridContainer);
}
let gridValue = generateGrid(16);

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function resetGrid(){
    gridValue.remove();
    let newSquares = 0;
    do {
        newSquares = parseInt(prompt("Grid Size?:  (Enter a number between 0 and 100)"));
    } while (newSquares > 100)
    gridValue = generateGrid(newSquares);
}