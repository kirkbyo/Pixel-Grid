var fp = [3,3];
var fpx = fp[0];
var fpy = fp[1];

var letterO = [fp,[fpx,fpy+1],[fpx,fpy+2],[fpx,fpy+3],[fpx,fpy+4],[fpx,fpy+5],[fpx+1,fpy+5],[fpx+2,fpy+5],[fpx+3,fpy+5],[fpx+4,fpy+5],[fpx+4,fpy],[fpx+4,fpy+1],[fpx+4,fpy+2],[fpx+4,fpy+3],[fpx+4,fpy+4], [fpx+1,fpy],[fpx+2,fpy],[fpx+3,fpy]];

var letterZ = []


function drawLetter(letter) {
   for (var row=0; row<letter.length; row++) {
      var points = letter[row]

      var gridRows = grid.childNodes;
      var selectedRow = gridRows[points[1] - 1];
      var selectedCell = selectedRow.childNodes[points[0] - 1];
      selectedCell.style.backgroundColor = "red";
   }
}
