const gridContainer = document.getElementById("grid-container");

function createGrid(gridSize){
  for (let i = 0; i < gridSize; i++){
    const gridBoxRow = document.createElement("div");
    gridBoxRow.className = "grid-box-row";
    gridContainer.appendChild(gridBoxRow);
    for (let j = 0; j < gridSize; j++){
      const gridBoxCol = document.createElement("div");
      gridBoxCol.className = "grid-box-col";
      gridBoxRow.appendChild(gridBoxCol);
    }
  }
}

// Event delegation for faster handling and smoother tracking
gridContainer.addEventListener("pointerover", function (e) {
  if (e.target.classList.contains("grid-box-col")) {
    e.target.style.backgroundColor = "black";
  }
});

createGrid(16);