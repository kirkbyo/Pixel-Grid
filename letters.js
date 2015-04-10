function findLetter(letter, focalPoint) {
   var x = letter.toLowerCase()

   var fp = focalPoint;
   var fpx = fp[0];
   var fpy = fp[1];
   if (x == "a") { // Letter a
      return [[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+3,fpy+3]]
   } else if (x == "b") { // Letter b
      return  [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+2, fpy+3],[fpx+3,fpy+4],[fpx+3,fpy+5], [fpx+2,fpy+5],[fpx+1,fpy+5],[fpx,fpy+5],[fpx,fpy+4],[fpx,fpy+3],[fpx,fpy+2],[fpx,fpy+1]];
   } else if (x == "c") { // Letter c
      return [fp,[fpx+1,fpy], [fpx+2,fpy], [fpx+3,fpy], [fpx, fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]];
   } else if (x == "d") { // Letter d
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+3,fpy],[fpx+2,fpy],[fpx+1,fpy]];
   } else if (x == "e") { // Letter e
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx, fpy+4], [fpx, fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]];
   } else if (x == "f") { // Letter f
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+1,fpy+3],[fpx+2,fpy+3]];
   } else if (x == "g") { // Letter g
      return [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+3,fpy+3],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]];
   } else if (x == "h") { // Letter h
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+3],[fpx+3,fpy+3],[fpx+4,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5]];
   } else if (x == "i") { // Letter i
      return [fp, [fpx,fpy+2],[fpx,fpy+3],[fpx, fpy+4], [fpx, fpy+5]]
   } else if (x == "j") { // Letter j
      return [[fpx+3,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+3,fpy+3],[fpx+3,fpy+4],[fpx+2,fpy+5],[fpx+1,fpy+5],[fpx,fpy+4]];
   } else if (x == "k") { // Letter k
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+3],[fpx+2,fpy+2],[fpx+3,fpy+1],[fpx+2,fpy+4],[fpx+3,fpy+5]];
   } else if (x == "l") { // Letter l
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]]
   } else if (x == "m") { // Letter m
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+3,fpy+2],[fpx+4,fpy+1],[fpx+5,fpy],[fpx+5,fpy+1],[fpx+5,fpy+2],[fpx+5,fpy+3],[fpx+5,fpy+4],[fpx+5,fpy+5]];
   } else if (x == "n") { // Letter n
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+2,fpy+3],[fpx+3,fpy+4],[fpx+4,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5]]
   } else if (x == "o") { // Letter o
      return [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]];
   } else if (x == "p") { // Letter p
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+3,fpy+2],[fpx+3,fpy+3],[fpx+2,fpy+3],[fpx+1,fpy+3]];
   } else if (x == "q") { // Letter q
      return [[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4],[fpx+4,fpy+5],[fpx+3,fpy+5],[fpx+3,fpy+4],[fpx+2,fpy+5],[fpx+1,fpy+5]];
   } else if (x == "r") { // Letter r
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy+1],[fpx+3,fpy+2],[fpx+3,fpy+2],[fpx+2,fpy+3],[fpx+1,fpy+3],[fpx+2,fpy+4],[fpx+3,fpy+5]];
   } else if (x == "s") { // Letter s
      return [[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+3,fpy+2],[fpx+2,fpy+2],[fpx+1,fpy+2],[fpx,fpy+1],[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]];
   } else if (x == "t") { // Letter t
      return [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+4,fpy],[fpx+2,fpy+1],[fpx+2,fpy+2],[fpx+2,fpy+3],[fpx+2,fpy+4],[fpx+2,fpy+4],[fpx+2,fpy+5]];
   } else if (x == "u") { // Letter u
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+4],[fpx+4,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy]];
   } else if (x == "v") { // Letter v
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx+1,fpy+3],[fpx+1,fpy+4],[fpx+2,fpy+5],[fpx+3,fpy+4],[fpx+3,fpy+3],[fpx+4,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy]];
   } else if (x == "w") {
      return [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx+1,fpy+3],[fpx+1,fpy+4],[fpx+2,fpy+5],[fpx+3,fpy+4],[fpx+3,fpy+3],[fpx+4,fpy+5],[fpx+5,fpy+4],[fpx+5,fpy+3],[fpx+6,fpy+2],
      [fpx+6,fpy+1],[fpx+6,fpy]];
   } else if (x == "x") {
      return [fp,[fpx+1,fpy+1],[fpx+2,fpy+2],[fpx+3,fpy+1],[fpx+4,fpy],[fpx+2,fpy+3],[fpx+1,fpy+4],[fpx,fpy+5],[fpx,fpy+5],[fpx+3,fpy+4],[fpx+4,fpy+5]];
   } else if (x == "y") {
      return [fp,[fpx,fpy+1],[fpx+1,fpy+2],[fpx+2,fpy+3],[fpx+3,fpy+2],[fpx+4,fpy+1],[fpx+4,fpy],[fpx+2,fpy+4],[fpx+2,fpy+5]];
   } else if (x == "z") { // Letter z
      return [fp,[fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy],[fpx+3,fpy+1],[fpx+2,fpy+2],[fpx+1,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5]];
   } else {
      return []
   }
}

function drawLetter(focalPoint, letter) {
   var letter = findLetter(letter, focalPoint)
   for (var row=0; row<letter.length; row++) {
      var points = letter[row]

      var gridRows = grid.childNodes;
      var selectedRow = gridRows[points[1] - 1];
      var selectedCell = selectedRow.childNodes[points[0] - 1];
      selectedCell.style.backgroundColor = "red";
   }
}
