var grid = document.getElementById('Pixel-Grid');
var cell_highlighted = "red";
var cell_default_background = "green";
var grid_width = 0;

function GenerateInnerRow(colums) {
   var rowFrag = document.createDocumentFragment();
   var innerRow = document.createElement("div");
   innerRow.innerHTML = AppendCellDivs()

   function AppendCellDivs() {
      // Appends Divs that act has cells
      var count = 0
      var divArr = ""
      while (count != colums) {
         divArr += "<div></div>";
         count += 1;
      }
      return divArr
   }

   while (innerRow.firstChild) {
      rowFrag.appendChild(innerRow.firstChild);
   }

   return rowFrag
}

function GenerateRow(colums) {
   var rowFrag = document.createDocumentFragment();
   var row = document.createElement("div");
   row.innerHTML = "<div></div>"

   while (row.firstChild) {
      rowFrag.appendChild(row.firstChild);
   }

   rowFrag.children[0].appendChild(GenerateInnerRow(colums));

   grid.insertBefore(rowFrag, grid.childNodes[0]);
}

function GenerateGrid(settings) {
   var rows = 0;
   cell_highlighted = settings.cell_highlighted;

   grid_width = settings.colums
   while (rows != settings.rows) {
      rows += 1;
      GenerateRow(settings.colums);
   }

   cell_default_background = getDefaultCellBackground();
}

function getDefaultCellBackground() {
   var gridRows = grid.childNodes;
   var selectedRow = gridRows[0];
   var selectedCell = selectedRow.childNodes[0];

   if (selectedCell != undefined) {
      var compStyle = getComputedStyle(selectedCell,null).getPropertyValue("background-color");
      return compStyle;
   } else {
      return "green"
   }
}
