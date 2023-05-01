const gridContainer = document.getElementById("grid-container");

// Create the 16x16 grid
for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);

  // Add a hover effect to each square
  square.addEventListener("mouseenter", function() {
    square.style.backgroundColor = "black";
  });

  square.addEventListener("mouseleave", function() {
    square.style.backgroundColor = "red";
  });
}