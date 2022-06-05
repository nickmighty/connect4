const Game = require('../game.js');


const newGame = new Game("joe", "bob", "joe");

// newGame.addToBoard(0)
// newGame.addToBoard(0)
// newGame.addToBoard(0)
// newGame.addToBoard(0)
// newGame.addToBoard(1)
// newGame.addToBoard(1)
// newGame.addToBoard(4)
// newGame.addToBoard(1)
// newGame.addToBoard(1)
// newGame.addToBoard(6)
// newGame.addToBoard(2)
// newGame.addToBoard(2)
// newGame.addToBoard(2)
// newGame.addToBoard(3)
// newGame.addToBoard(3)

// newGame.addToBoard(4)
// newGame.addToBoard(5)
// newGame.addToBoard(5)
// newGame.addToBoard(3)
// newGame.addToBoard(4)
// newGame.addToBoard(6)
// newGame.addToBoard(3)

// newGame.addToBoard(4)
// newGame.addToBoard(2)
// newGame.addToBoard(0)
// newGame.addToBoard(3)
// newGame.addToBoard(3)
// newGame.addToBoard(3)
// newGame.addToBoard(3)

// newGame.addToBoard(1)
// newGame.addToBoard(6)
// newGame.addToBoard(1)
// newGame.addToBoard(6)
// newGame.addToBoard(1)
// newGame.addToBoard(6)
// newGame.addToBoard(1)
// newGame.addToBoard(6)

console.log(newGame.getAvailable())

console.table(newGame.showGameBoard());