const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const colorButtons = document.querySelectorAll(".color-button:not(.reset-color)");
const rowsInput = document.getElementById("rows-input");
const colsInput = document.getElementById("cols-input");
const createGridButton = document.getElementById("create-grid-button");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const redButton = document.getElementById("red-button");
const orangeButton = document.getElementById("orange-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const purpleButton = document.getElementById("purple-button");

// Default color for painting squares
let currentColor = "black";

// Boolean to track if the left mouse button is held down
let isPainting = false;

// Function to create the grid
function createGrid(rows, cols) {
  // Set the grid-template-columns and grid-template-rows properties
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  // Create the cells and append them to the grid
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mousedown", () => {
      isPainting = true;
      cell.classList.add("active");
      cell.style.backgroundColor = currentColor;
    });
    cell.addEventListener("mouseenter", () => {
      if (isPainting) {
        cell.classList.add("active");
        cell.style.backgroundColor = currentColor;
      }
    });
    cell.addEventListener("mouseup", () => {
      isPainting = false;
    });
    cell.addEventListener("click", () => {
      cell.classList.add("active");
      cell.style.backgroundColor = currentColor;
    });
    gridContainer.appendChild(cell);
  }

  // Add thin lines between cells
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.border = "1px solid #ccc";
  });
}

// Function to reset the grid
function resetGrid() {
  gridContainer.innerHTML = "";
  createGrid(rowsInput.value, colsInput.value);
}

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  resetGrid();
});

colorButtons.forEach(button => {
  button.addEventListener("mousedown", (event) => {
    event.stopPropagation();
    event.preventDefault(); // add this line
  });
  
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    currentColor = button.dataset.color; // add this line
    document.querySelectorAll(".color-button").forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    document.documentElement.style.setProperty('--current-color', currentColor);
  });

  button.addEventListener("mouseup", () => {
    isPainting = false; // add this line
  });
});



// Event listener for the create grid button
createGridButton.addEventListener("click", () => {
  resetGrid();
});

// Set up the initial grid
const initialRows = 16;
const initialCols = 16;
createGrid(initialRows, initialCols);
