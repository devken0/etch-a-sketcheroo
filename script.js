const gridContainer = document.getElementById("grid-container");

let gridSize = 100;

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

const gridBoxes = document.querySelectorAll('.grid-box-col');
gridBoxes.forEach(box => box.addEventListener('mouseover', function(){
  box.style.backgroundColor = "black";
}));