// get necessary dom nodes
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector("#myrange");
const colorPicker = document.querySelector("#colorpicker");
const gridItems = document.getElementsByClassName("item");
const gridLabelNum = document.getElementsByClassName("gridlabelnum");
const clearBtn = document.querySelector("#clear-btn");
const partyBtn = document.querySelector("#party-btn");
let gridSize = rangeInput.value;
let currentColor = "black";
let isMouseDown;
let isPartyMode = false;

// checks if mouse is held down
canvas.addEventListener("mousedown", function (e) {
  e.preventDefault();
  isMouseDown = true;
});
document.addEventListener("mouseup", () => (isMouseDown = false));

// updates current color variable everytime colorpicker value is changes
colorPicker.addEventListener("input", (e) => (currentColor = e.target.value));
// updates the gridSize variable to be equal to slider input
rangeInput.addEventListener("input", (e) => (gridSize = e.target.value));
// runs createGrid function everytime the value of the rangeslider changes
rangeInput.addEventListener("input", () => createGrid(gridSize));

// updates grid size label numbers
rangeInput.addEventListener("input", () => {
  for (let i = 0; i < gridLabelNum.length; i++) {
    gridLabelNum[i].innerText = gridSize;
  }
});

// updates background color of div to currentColor value if dragged
function changeColorOnDrag(e) {
  if (isMouseDown) {
    e.target.style.backgroundColor = `${currentColor}`;
  }
}

// updates background color of div to currentColor value if clicked
function changeColorOnClick(e) {
  e.target.style.backgroundColor = `${currentColor}`;
}

// activates clear grid function
clearBtn.addEventListener("click", clearGrid);

// function to clear grid on button click
function clearGrid() {
  canvas.replaceChildren();
  createGrid(gridSize);
}


// Handle party mode state
partyBtn.addEventListener("click", () => (isPartyMode = !isPartyMode));
console.log(`party mode is ${isPartyMode}`)
partyBtn.addEventListener('click', () => console.log(`party mode is ${isPartyMode}`))

if (isPartyMode) {
  document.addEventListener('mousemove', () => currentColor = "#" + Math.floor(Math.random() * 16777215).toString(16))
}

function randomizeCurrentColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  currentColor = randomColor;
}

function createGrid(gridSize) {
  canvas.replaceChildren(); // remove all canvas divs before generating new ones
  canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.addEventListener("mouseover", changeColorOnDrag);
    div.addEventListener("mousedown", changeColorOnClick);
    canvas.appendChild(div);
  }
}

createGrid(16);
