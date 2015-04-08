var grid = document.getElementById('Pixel-Grid');

function GenerateInnerRow() {
   var rowFrag = document.createDocumentFragment();
   var innerRow = document.createElement("div");
   innerRow.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"

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

GenerateRow()
