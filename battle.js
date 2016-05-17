///////////////////////////////////////////////////////////
//
// The following function creates a representation of a players board in a game of battleships
// the width and height of the board are defined using the xLength and yLength arguments
function GameBoard (xLength, yLength) {
            this.tiles = [];
            this.shipCount = 0;
 
            for (var x = 0; x < xLength; x++) {
                        for (var y = 0; y < yLength; y++) {
                                    if (!this.tiles[x]) this.tiles[x] = [];
                                    this.tiles[x][y] = 0;
                        }
            }

            //////I ended up adding the function as a method of the Gameboard object//////
            this.createShip = function (shipX, shipY, shipLength, shipDirection) {

				if (shipDirection == 'h') {

					for (var y = shipY; y < shipY + shipLength; y++) {

						this.tiles[shipX][y] = 1;

					}


				} else {

					for (var y = shipY; y < shipY + shipLength; y++) {

						this.tiles[y][shipX] = 1;

					}

				}

				this.shipCount++

			}
}

///////////////////////Add a ship. shipDirection = v for vertical or h for horizontal//////
///////////////////////Every ship added increments the shipCount value in board object/////

function boardShip (shipX, shipY, shipLength, shipDirection) {

	if (shipDirection == 'h') {

		for (var y = shipY; y < shipY + shipLength; y++) {

			board.tiles[shipX][y] = 1;

		}


	} else {

		for (var y = shipY; y < shipY + shipLength; y++) {

			board.tiles[y][shipX] = 1;

		}

	}

	board.shipCount++

}

var board = new GameBoard(5, 5);
 
var boardtwo = new GameBoard(10, 10);

boardShip(2, 1, 2, 'h')

boardtwo.createShip(1, 1, 5, 'v');

boardtwo.createShip(2, 3, 3, 'h');


//Testing below

console.log(board.tiles)
console.log(board.shipCount)

console.log(boardtwo.tiles)
console.log(boardtwo.shipCount)

//////////////////////////////////////////////////////
