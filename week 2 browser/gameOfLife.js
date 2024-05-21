const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const resolution = 40;
canvas.width = 400;
canvas.height = 400;

// create gride
const COLS = canvas.width / resolution;
const ROWS = canvas.height / resolution;
function buildGrid (){
  return new Array(COLS).fill(null) // to make it iterable we did null*
  .map (() => new Array(ROWS).fill(0));

}

const grid = buildGrid();
console.log(grid);


// plot a grid based on the cells 0, 0 ....
render(grid);

function render(grid){
  for(let col = 0; col < grid.length; col++){
    for(let row = 0; row < grid[col].length; row++){
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col*resolution, row*resolution,resolution,resolution,resolution)
      ctx.stroke();
    }
  }
}