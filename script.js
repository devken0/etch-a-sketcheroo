const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById('new-grid');
const presetBtn = document.querySelectorAll('.preset');

function createGrid(gridSize = 16){
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

newGridBtn.addEventListener('click', () => {
  let gridSize = prompt("Enter grid size (1-100): ", 16);
  gridSize = parseInt(gridSize);
  console.log(typeof gridSize);

  if (gridSize > 100){
    return alert("Max grid size is 100.");
  }
  if (gridSize == null || gridSize == "" || !Number.isInteger(gridSize)){
    console.log("No changes made to the grid.")
    console.log(gridSize);
    return;
  } 
  gridContainer.innerHTML = '';
  console.log(`${gridSize}x${gridSize} grid created`);
  createGrid(gridSize);
});

presetBtn.forEach(btn => btn.addEventListener('click', () => {
  gridContainer.innerHTML = '';
  if (btn.innerHTML == "16x16"){ return createGrid(16)};
  if (btn.innerHTML == "32x32"){ return createGrid(32)};
  if (btn.innerHTML == "64x64"){ return createGrid(64)};
  if (btn.innerHTML == "96x96"){ return createGrid(96)};
}));

createGrid();