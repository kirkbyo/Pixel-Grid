GenerateGrid()

function hightlightCell(x, y) {
   var gridRows = grid.childNodes;
   var selectedRow = gridRows[y - 1];
   var selectedCell = selectedRow.childNodes[x - 1];
   selectedCell.style.backgroundColor = "red";
}

// Left Line
hightlightCell(2,3)
hightlightCell(2,4)
hightlightCell(2,5)
hightlightCell(2,6)
hightlightCell(2,7)
hightlightCell(2,8)

// Bottom Line

hightlightCell(3,8)
hightlightCell(4,8)
hightlightCell(5,8)
hightlightCell(6,8)

// Right Line
hightlightCell(6,3)
hightlightCell(6,4)
hightlightCell(6,5)
hightlightCell(6,6)
hightlightCell(6,7)

// Top Line

hightlightCell(3,3)
hightlightCell(4,3)
hightlightCell(5,3)
