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
