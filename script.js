const gridContainer = document.getElementById("grid-container");
const resetButton = document.getElementById("reset-button");

// Create the 16x16 grid
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);

  // Add a hover effect to each square
  square.addEventListener("mouseenter", function() {
    square.style.backgroundColor = "black";
  });
}

// Add event listener to reset button
resetButton.addEventListener("click", function() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(function(square) {
    square.style.backgroundColor = "white";
  });
});