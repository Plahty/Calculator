const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const redButton = document.getElementById("red-button");
const orangeButton = document.getElementById("orange-button");
const yellowButton = document.getElementById("yellow-button");
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const purpleButton = document.getElementById("purple-button");
const rowsInput = document.getElementById("rows-input");
const colsInput = document.getElementById("cols-input");
const createGridButton = document.getElementById("create-grid-button");

let currentColor = "black";
let isMouseDown = false;

// Function to create the grid
function createGrid(rows, cols) {
  gridContainer.innerHTML = ""; // Clear the grid container

  // Set the grid container styles
  gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  // Create the squares
  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);

    // Add event listeners to each square
    square.addEventListener("mousedown", function() {
      isMouseDown = true;
      square.style.backgroundColor = currentColor;
    });
    square.addEventListener("mouseenter", function() {
      if (isMouseDown) {
        square.style.backgroundColor = currentColor;
      }
    });
    square.addEventListener("mouseup", function() {
      isMouseDown = false;
    });
  }
}

// Add event listener to reset button
resetButton.addEventListener("click", function() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function(square) {
    square.style.backgroundColor = "white";
  });
});

// Add event listeners to color buttons
whiteButton.addEventListener("click", function() {
  currentColor = "white";
});
blackButton.addEventListener("click", function() {
  currentColor = "black";
});
redButton.addEventListener("click", function() {
  currentColor = "red";
});
orangeButton.addEventListener("click", function() {
  currentColor = "orange";
});
yellowButton.addEventListener("click", function() {
  currentColor = "yellow";
});
greenButton.addEventListener("click", function() {
  currentColor = "green";
});
blueButton.addEventListener("click", function() {
  currentColor = "blue";
});
purpleButton.addEventListener("click", function() {
  currentColor = "purple";
});

// Add event listener to create grid button
createGridButton.addEventListener("click", function() {
  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);
  createGrid(rows, cols);
});

