const gridContainer = document.getElementById("grid-container");
const newGridBtn = document.getElementById('new-grid');
const gridSizeSelect = document.getElementById('grid-size-select');
const toogleGridBtn = document.getElementById('toogleGrid');
const toogleEffectBtn = document.getElementById('toogleEffect');
const toogleColorBtn = document.getElementById('toogleColor');
let showGrid = true;
let darken = true;
let isColorful = true;

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
      gridBoxRow.appendChild(gridBoxCol);
    }
  }
}

// Event delegation for faster handling and smoother tracking
gridContainer.addEventListener("pointerover", function (e) {
  let r = 0;
  let g = 0;
  let b = 0;
  let darkness = parseFloat(e.target.dataset.darkness);
  const clearGridBtn = document.getElementById('clear-grid');
  if (clearGridBtn == null){
    const btn = document.createElement('button');
    const ct = document.querySelector('.container');

    btn.innerHTML = '<i class="fa-solid fa-broom"></i><span class="tip">Click this or press Esc to clear the grid.</span>';
    btn.classList.add('tooltip');
    btn.setAttribute('id', 'clear-grid');
    ct.appendChild(btn);

    btn.addEventListener('click', () => {
      const cell = document.querySelectorAll('.grid-box-col');
      cell.forEach(col => col.style.backgroundColor = `rgba(0, 0, 0, 0)`);
    })
  }
  if (isColorful){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
  }
  if (e.target.classList.contains("grid-box-col") && darken == true) {
    if (darkness < 1){
      darkness += 0.1;
      e.target.dataset.darkness = darkness.toFixed(1);
      e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${darkness})`;
    }
  }
  if (e.target.classList.contains("grid-box-col") && darken == false) {
    if (darkness < 1){
      darkness += 1;
      e.target.dataset.darkness = darkness.toFixed(1);
      e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${darkness})`;
    }
  }
});

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

toogleEffectBtn.addEventListener('change', function() {
  darken = !darken;
})

toogleColorBtn.addEventListener('change', function() {
  isColorful = !isColorful;
})

createGrid();