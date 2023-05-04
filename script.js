const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const colorButtons = document.querySelectorAll(".color-button");
const rowsInput = document.getElementById("rows-input");
const colsInput = document.getElementById("cols-input");
const createGridButton = document.getElementById("create-grid-button");

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
      cell.style.backgroundColor = currentColor;
    });
    cell.addEventListener("mouseenter", () => {
      if (isPainting) {
        cell.style.backgroundColor = currentColor;
      }
    });
    cell.addEventListener("mouseup", () => {
      isPainting = false;
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

// Event listeners for the color buttons
colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentColor = button.dataset.color;
  });
});

// Event listener for the create grid button
createGridButton.addEventListener("click", () => {
  resetGrid();
});

// Create the initial grid
const initialRows = 16;
const initialCols = 16;
createGrid(initialRows, initialCols);
