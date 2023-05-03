const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const colorButtons = document.querySelectorAll(".color-button");

// Default color for painting squares
let currentColor = "black";

// Boolean to track if the left mouse button is held down
let isPainting = false;

// Function to create the grid
function createGrid(size) {
  // Set the grid-template-columns and grid-template-rows properties
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create the cells and append them to the grid
  for (let i = 0; i < size * size; i++) {
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
  createGrid(gridSize);
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

// Create the initial grid
const gridSize = 16;
createGrid(gridSize);
