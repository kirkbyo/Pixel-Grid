function findLetter(letter, focalPoint) {
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
         letter_width: 4
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
         points: [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+1],
                  [fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]],
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
   } else if (x == "w") {
      return {
         points: [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx+1,fpy+3],[fpx+1,fpy+4],[fpx+2,fpy+5],
                  [fpx+3,fpy+4],[fpx+3,fpy+3],[fpx+4,fpy+5],[fpx+5,fpy+4],[fpx+5,fpy+3],[fpx+6,fpy+2],[fpx+6,fpy+1],[fpx+6,fpy]],
         letter_width: 7

      }
   } else if (x == "x") {
      return {
         points: [fp,[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+3,fpy+1],[fpx+4,fpy],[fpx+2,fpy+3],[fpx+1,fpy+4],
                  [fpx,fpy+5],[fpx,fpy+5],[fpx+3,fpy+4],[fpx+4,fpy+5]],
         letter_width: 4
      }
   } else if (x == "y") {
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
      return []
   }
}

function drawLetterAtXY(focalPoint, letter) {
   var letter = findLetter(letter, focalPoint);
   var letterPoints = letter.points
   for (var row=0; row<letterPoints.length; row++) {
      var points = letter.points[row]; // Selecting the individual Cordinates for that Point

      var gridRows = grid.childNodes;
      var selectedRow = gridRows[points[1] - 1];
      var selectedCell = selectedRow.childNodes[points[0] - 1];
      selectedCell.style.backgroundColor = "red";
   }
   var letter_width = letter.letter_width
   return [letter_width]
}

function drawLetters(startPoint,letters) {
   var letters = letters.split("");
   for (var index=0; index<letters.length; index++) {
      var letter = letters[index];
      if (index == 0) {
         var properties = drawLetterAtXY(startPoint)
      }
   }
}
