function buildGrid(x, y, cellSize, gridElement) {
    gridElement.style.display = "grid";
    gridElement.style.gridTemplateColumns = `repeat(${x}, ${cellSize}px)`;
    gridElement.style.gridTemplateRows = `repeat(${y}, ${cellSize}px)`;

    let squares = new DocumentFragment();
    let resetButton = document.getElementById('reset');

    for (let i = 0; i < x * y; i++) {
        let square = document.createElement("div");
        square.className = "square";
        squares.appendChild(square);

        square.addEventListener('mouseenter', function (e) {
            square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        })

        resetButton.addEventListener('click', () => {
            square.style.backgroundColor = 'white';
        })
    }

    gridElement.appendChild(squares);
}
let changeSize = document.getElementById('size');

changeSize.addEventListener('click', () => {
    window.location.reload();
})

var newCellSize = parseInt(prompt('Enter canvas size please : ', 20));

if (newCellSize < 50) {
    buildGrid(16, 16, newCellSize, document.querySelector(".grid"));
} else {
    buildGrid(16, 16, 20, document.querySelector(".grid"));
}