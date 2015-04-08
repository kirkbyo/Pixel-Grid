var grid = document.getElementById('Pixel-Grid');

function GenerateInnerRow() {
   var rowFrag = document.createDocumentFragment();
   var innerRow = document.createElement("div");
   innerRow.innerHTML = AppendCellDivs()

   function AppendCellDivs() {
      // Appends 32 Divs that act has cells
      var count = 0
      var divArr = ""
      while (count != 32) {
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

function GenerateRow() {
   var rowFrag = document.createDocumentFragment();
   var row = document.createElement("div");
   row.innerHTML = "<div></div>"

   while (row.firstChild) {
      rowFrag.appendChild(row.firstChild);
   }

   rowFrag.children[0].appendChild(GenerateInnerRow());

   grid.insertBefore(rowFrag, grid.childNodes[0]);
}

function GenerateGrid() {
   var rows = 0
   while (rows != 10) {
      rows += 1
      GenerateRow()
   }
}
