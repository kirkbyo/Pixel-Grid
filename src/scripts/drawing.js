/** drawLetterAtXY
 * Draws a letter at a specific focal point
 * @param {Array<Int>} focalPoint
 * @param {String} Letter
 * @param {String} color
 */
function drawLetterAtXY(focalPoint, letter, color) {
   var letter = findLetter(focalPoint, letter); // Finding the letter

   var letterPoints = letter.points; // Get the points from the letter Object
   for (var row=0; row<letterPoints.length; row++) {
      var points = letter.points[row]; // Selecting the individual Cordinates for that Point
      var gridRows = grid.childNodes; // Selects all 'divs' that acts has rows
      var selectedRow = gridRows[points[1] - 1]; // Selecting row using the y cordinate
      var selectedCell = selectedRow.childNodes[points[0] - 1]; // Selecting the cell using the x cordinate
      if (selectedCell != undefined) { // Check if cell actually exists
         selectedCell.style.backgroundColor = color; // Changing cell background cell
      }
   }
}

/** drawWord
 * Draws a word to the screen based on startPoint
 * @param {Array<Int>} startPoint
 * @param {String} letters
 * @param {String} color
 */
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

/** UnDrawWord
 * Replaces colored cells with the default background color
 * @param {Array<Int>} startPoint
 * @param {String} letters
 */
function UnDrawWord(startPoint,letters) {
   // Draws the word again execpt with default background color
   drawWord(startPoint,letters, cell_default_background);
}

/** CalculateWordWidth
 * Calculate the width of word drawed to the screen based on the letters coordinates
 * @param {Array<Array>} cords
 * @return {Int} sum
 */
function CalculateWordWidth(cords) {
   var sum = 0
   for (var index=0; index<cords.length; index++) { // Loops threw the length of the passed cords
      var cord = cords[index]; // gets a single coordinates
      sum += cord[0] - sum; // Adds the x value from the cord variable to the sum
   }
   return sum + 1 // Returns the sum
}
