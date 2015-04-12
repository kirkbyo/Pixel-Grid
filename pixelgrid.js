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

function findLetter(focalPoint, letter) {
   var x = letter.toLowerCase()

   var fp = focalPoint;
   var fpx = fp[0];
   var fpy = fp[1];
   if (x == "a") { // Letter a
      return {
         points:  [[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+4,fpy+1],[fpx+4,fpy+2],
                  [fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+3,fpy+3]],
         letter_width: 5
      };
   } else if (x == "b") { // Letter b
      return {
         points: [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+2, fpy+3],[fpx+3,fpy+4],[fpx+3,fpy+5],
                  [fpx+2,fpy+5],[fpx+1,fpy+5],[fpx,fpy+5],[fpx,fpy+4],[fpx,fpy+3],[fpx,fpy+2],[fpx,fpy+1]],
         letter_width: 4
      }
   } else if (x == "c") { // Letter c
      return {
         points: [fp,[fpx+1,fpy], [fpx+2,fpy], [fpx+3,fpy], [fpx, fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],
                  [fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else if (x == "d") { // Letter d
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],
                  [fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+3,fpy],[fpx+2,fpy],[fpx+1,fpy]],
         letter_width: 5
      }
   } else if (x == "e") { // Letter e
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx, fpy+4], [fpx, fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],
                  [fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else if (x == "f") { // Letter f
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+1,fpy+3],[fpx+2,fpy+3]],
         letter_width: 4
      }
   } else if (x == "g") { // Letter g
      return {
         points: [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],
                  [fpx+4,fpy+3],[fpx+3,fpy+3],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]],
         letter_width: 5
      }
   } else if (x == "h") { // Letter h
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+3,fpy+3],[fpx+4,fpy],[fpx+4,fpy+1],
                  [fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5]],
         letter_width: 5
      }
   } else if (x == "i") { // Letter i
      return {
         points: [fp, [fpx,fpy+2],[fpx,fpy+3],[fpx, fpy+4], [fpx, fpy+5]],
         letter_width: 1
      }
   } else if (x == "j") { // Letter j
      return {
         points: [[fpx+3,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+3,fpy+3],[fpx+3,fpy+4],[fpx+2,fpy+5],[fpx+1,fpy+5],[fpx,fpy+4]],
         letter_width: 4
      }
   } else if (x == "k") { // Letter k
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+2],[fpx+3,fpy+1],[fpx+2,fpy+4],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else if (x == "l") { // Letter l
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else if (x == "m") { // Letter m
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+3,fpy+2],
                  [fpx+4,fpy+1],[fpx+5,fpy],[fpx+5,fpy+1],[fpx+5,fpy+2],[fpx+5,fpy+3],[fpx+5,fpy+4],[fpx+5,fpy+5]],
         letter_width: 6
      }
   } else if (x == "n") { // Letter n
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+2,fpy+3],[fpx+3,fpy+4],[fpx+4,fpy],
                  [fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5]],
         letter_width: 5
      }
   } else if (x == "o") { // Letter o
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+5],
                  [fpx+4,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4], [fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]],
         letter_width: 5
      }
   } else if (x == "p") { // Letter p
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],
                  [fpx+3,fpy+2],[fpx+3,fpy+3],[fpx+2,fpy+3],[fpx+1,fpy+3]],
         letter_width: 4
      }
   } else if (x == "q") { // Letter q
      return {
         points: [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],
                  [fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5],[fpx+3,fpy+5],[fpx+3,fpy+4],[fpx+2,fpy+5],[fpx+1,fpy+5]],
         letter_width: 5
      }
   } else if (x == "r") { // Letter r
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+3,fpy+2],
                  [fpx+2,fpy+3],[fpx+1,fpy+3],[fpx+2,fpy+4],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else if (x == "s") { // Letter s
      return {
         points: [[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+3,fpy+2],
                  [fpx+2,fpy+2],[fpx+1,fpy+2],[fpx,fpy+1],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]],
         letter_width: 5
      }
   } else if (x == "t") { // Letter t
      return {
         points: [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+4,fpy],[fpx+2,fpy+1],[fpx+2,fpy+2],[fpx+2,fpy+3],[fpx+2,fpy+4],[fpx+2,fpy+4],[fpx+2,fpy+5]],
         letter_width: 5
      }
   } else if (x == "u") { // Letter u
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],
                  [fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy]],
         letter_width: 5
      }
   } else if (x == "v") { // Letter v
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx+1,fpy+3],[fpx+1,fpy+4],[fpx+2,fpy+5],[fpx+3,fpy+4],[fpx+3,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy]],
         letter_width: 5
      }
   } else if (x == "w") { // Letter w
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx+1,fpy+3],[fpx+1,fpy+4],[fpx+2,fpy+5],
                  [fpx+3,fpy+4],[fpx+3,fpy+3],[fpx+4,fpy+5],[fpx+5,fpy+4],[fpx+5,fpy+3],[fpx+6,fpy+2],[fpx+6,fpy+1],[fpx+6,fpy]],
         letter_width: 7

      }
   } else if (x == "x") { // Letter x
      return {
         points: [fp,[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+3,fpy+1],[fpx+4,fpy],[fpx+2,fpy+3],[fpx+1,fpy+4],
                  [fpx,fpy+5],[fpx,fpy+5],[fpx+3,fpy+4],[fpx+4,fpy+5],[fpx+3,fpy+5],[fpx+1,fpy+5],[fpx,fpy+1],[fpx+4,fpy+1]],
         letter_width: 5
      }
   } else if (x == "y") { // Letter y
      return {
         points: [fp,[fpx,fpy+1],[fpx+1,fpy+2],[fpx+2,fpy+3],[fpx+3,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy],[fpx+2,fpy+4],[fpx+2,fpy+5]],
         letter_width: 5
      }
   } else if (x == "z") { // Letter z
      return {
         points: [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+3,fpy+1],[fpx+2,fpy+2],[fpx+1,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]],
         letter_width: 4
      }
   } else {
      if (findSymbol(focalPoint,x) == []) {
         return [];
      } else {
         return findSymbol(focalPoint,x);
      }
   }
}

function findSymbol(focalPoint, symbol) {
   var x = symbol.toLowerCase()

   var fp = focalPoint;
   var fpx = fp[0];
   var fpy = fp[1];

   if (x == ".") {
      return {
         points: [[fpx,fpy+5]],
         letter_width: 1
      }
   } else if ("-") {
      return {
         points: [[fpx,fpy+3],[fpx+1,fpy+3],[fpx+2,fpy+3]],
         letter_width: 3
      }
   } else {
      return [];
   }
}

function drawLetterAtXY(focalPoint, letter, color) {
   var letter = findLetter(focalPoint, letter);

   var letterPoints = letter.points;
   for (var row=0; row<letterPoints.length; row++) {
      var points = letter.points[row]; // Selecting the individual Cordinates for that Point
      var gridRows = grid.childNodes;
      var selectedRow = gridRows[points[1] - 1];
      var selectedCell = selectedRow.childNodes[points[0] - 1];
      if (selectedCell != undefined) {
         selectedCell.style.backgroundColor = color;
      }
   }
}

function drawWord(startPoint, letters, color) {
   var cords = [startPoint]; // Cords to hold all the letters position
   var letters = letters.split(""); // Converts passed Word to Array
   for (var index=0; index<letters.length; index++) { // Loops threw each letter
      var letter = letters[index]; // Assigns a letter from the letters Array
      if (index == 0) { // Checks if this is the first time
         drawLetterAtXY(startPoint, letter, color); // Draws the Letter

         // Sets Next Cords
         var letterObject = findLetter(startPoint, letter); // Finds Letters Object
         var letter_width = letterObject.letter_width // Gets Objects Width
         cords.push([startPoint[0] + letter_width + 1, startPoint[1]]); // Updates the array with the next position
      } else {
         var last = cords[cords.length -1]; // Finds the last element in the array
         if (CalculateWordWidth(cords) < grid_width) {
            drawLetterAtXY(last, letter, color); // Draws the letter at the next location
         }

         var letterObject = findLetter(last, letter); // Gets Letter Object
         var letter_width = letterObject.letter_width; // Gets width of the letter
         cords.push([last[0] + letter_width + 1, last[1]]); // Updates array with the next position
      }
   }
}

function UnDrawWord(startPoint,letters) {
   drawWord(startPoint,letters, cell_default_background)
}

function CalculateWordWidth(cords) {
   var sum = 0
   for (var index=0; index<cords.length; index++) {
      var cord = cords[index];
      sum += cord[0] - sum;
   }
   return sum + 1
}
