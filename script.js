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
  gridContainer.style.gridGap = "0"; // Set grid gap to 0

  // Create the squares
  for (let i = 0; i < rows * cols; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);

    // Add event listeners to each square
    square.addEventListener("mousedown", function(event) {
      event.preventDefault(); // Prevent the default behavior of selecting text
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

// Initialize the grid
createGrid(16, 16);












im showing you my code, i want you to write code that puts the reset button on the same level as the color buttons, and remove the text from the color buttons and make them the corresponding color instead with no text. also put a little vertical line between the reset button and the color buttons. show me what my javascript, html, and css should look like with your implemented changes: 
html:
<!DOCTYPE html>
<html>
  <head>
    <title>EAS</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="container">
      <div id="grid-container"></div>
      <button id="reset-button">Reset</button>
      <div class="buttons-container">
        <button id="white-button">White</button>
        <button id="black-button">Black</button>
        <button id="red-button">Red</button>
        <button id="orange-button">Orange</button>
        <button id="yellow-button">Yellow</button>
        <button id="green-button">Green</button>
        <button id="blue-button">Blue</button>
        <button id="purple-button">Purple</button>
      </div>
      <div class="inputs-container">
        <input type="number" id="rows-input" placeholder="Rows">
        <input type="number" id="cols-input" placeholder="Columns">
        <button id="create-grid-button">Create Grid</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
javascript:



