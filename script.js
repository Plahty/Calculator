const gridContainer = document.getElementById("grid-container");

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }