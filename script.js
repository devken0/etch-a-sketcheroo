const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById('new-grid');
const gridSizeSelect = document.getElementById('grid-size-select');
const toogleGridBtn = document.getElementById('toogleGrid');
let showGrid = true;
let darken = true;
let isColorful = true;

function enableDarken(cell){
  cell.addEventListener("pointerover", () => {
    let darkness = parseFloat(cell.dataset.darkness);
    if (darkness < 1){
      darkness += 0.1;
      cell.dataset.darkness = darkness.toFixed(1);
      cell.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
    }
    return cell;
  })
}

function createGrid(gridSize = 16){
  for (let i = 0; i < gridSize; i++){
    const gridBoxRow = document.createElement("div");
    gridBoxRow.className = "grid-box-row";
    gridContainer.appendChild(gridBoxRow);
    for (let j = 0; j < gridSize; j++){
      const gridBoxCol = document.createElement("div");
      gridBoxCol.className = "grid-box-col";
      gridBoxCol.dataset.darkness = 0;
      gridBoxCol.style.backgroundColor = `rgba(0, 0, 0, 0)`;
      if (showGrid){
        gridBoxCol.classList.add('grid-guide');
      }
      if (darken){
        enableDarken(gridBoxCol);
      }
      gridBoxRow.appendChild(gridBoxCol);
    }
  }
}

function clearGrid(){

}

// // Event delegation for faster handling and smoother tracking
// gridContainer.addEventListener("pointerover", function (e) {
//   if (e.target.classList.contains("grid-box-col")) {
//     e.target.style.backgroundColor = "black";
//   }
//   // Add clear grid button 
// });

newGridBtn.addEventListener('click', () => {
  let gridSize = prompt("Enter grid size (1-100): ", 16);
  gridSize = parseInt(gridSize);
  // console.log(typeof gridSize);

  if (gridSize == null || gridSize == "" || !Number.isInteger(gridSize)){
    console.log("No changes made to the grid.")
    console.log(gridSize);
    return;
  } 
  if (gridSize > 100){
    console.log("Maximum grid size is 100.");
    return alert("Max grid size is 100.");
  } else if (gridSize < 16){
    console.log("Minimum grid size is 16.");
    return alert("Minimum grid size is 16.");
  }
  gridContainer.innerHTML = '';
  console.log(`${gridSize}x${gridSize} custom grid created`);
  createGrid(gridSize);
});

gridSizeSelect.addEventListener(`change`, (e) => {
  const gridSize = parseInt(e.target.value);
  gridContainer.innerHTML = ``;
  console.log(`$gridSize)x${gridSize} grid preset selected.`);
  createGrid(gridSize);
})

toogleGridBtn.addEventListener('change', function() {
  const gridBoxCol = document.querySelectorAll('.grid-box-col');
  gridBoxCol.forEach(col => col.classList.toggle('grid-guide'));
  showGrid = !showGrid;
})

createGrid();