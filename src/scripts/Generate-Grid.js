var grid = document.getElementById('Pixel-Grid'); // Get Grid from DOM

// Public Grid Properties
var cell_highlighted = "red"; // Cell Highlighted colored
var cell_default_background = "green"; // Grid background (Will be changed)
var grid_width = 0; // Width of the Grid

/** GenerateInnerRow
 * Generates a collection of <div>s to be inserted to the row
 * @param {Int} colums
 * @return {DocumentFragment} rowFrag
 */
function GenerateInnerRow(colums) {
   var rowFrag = document.createDocumentFragment();
   var innerRow = document.createElement("div");
   innerRow.innerHTML = AppendCellDivs();

   /** AppendCellDivs
    * Appends <div>'s to a string depending on the amount of colums
    * @return {String} divStr
    */
   function AppendCellDivs() {
      // Appends Divs that act has cells
      var count = 0 // Loop times
      var divStr = "" // String of <div>'s
      while (count != colums) { // Adds <div>'s depending on the amount of colums
         divStr += "<div></div>";
         count += 1;
      }
      return divStr
   }

   while (innerRow.firstChild) { // Apends divs to innerRow element to the Document Fragment
      rowFrag.appendChild(innerRow.firstChild);
   }

   return rowFrag
}

/** GenerateRow
 * Generates rows depending on the amount of colums
 * @param {Int} colums
 */
function GenerateRow(colums) {
   var rowFrag = document.createDocumentFragment();
   var row = document.createElement("div");
   row.innerHTML = "<div></div>";

   while (row.firstChild) {
      rowFrag.appendChild(row.firstChild);
   }

   rowFrag.children[0].appendChild(GenerateInnerRow(colums));

   grid.insertBefore(rowFrag, grid.childNodes[0]);
}

/** GenerateGrid
 * Generates complete grid
 * @param {Object} settings
 *** Object: colums, rows, cell_highlighted
 */
function GenerateGrid(settings) {
   var rows = 0;
   cell_highlighted = settings.cell_highlighted;
   grid_width = settings.colums;

   while (rows != settings.rows) {
      rows += 1;
      GenerateRow(settings.colums);
   }

   cell_default_background = getDefaultCellBackground();
}

/** getDefaultCellBackground
 * Finds and returns the background of the first cell (x: 0, y: 0)
 * @return {String} compStyle
 */
function getDefaultCellBackground() {
   var gridRows = grid.childNodes; // Selects all child nodes of the grid
   var selectedRow = gridRows[0]; // Selects the first row
   var selectedCell = selectedRow.childNodes[0]; // Selects the first cell

   if (selectedCell != undefined) { // Checks if cell exists
      var compStyle = getComputedStyle(selectedCell,null).getPropertyValue("background-color"); // Gets the background color of the first cell
      return compStyle; // Returns background as RGB
   } else {
      // If for some magical reason the cell does not exist, it will default to green
      return "green";
   }
}
