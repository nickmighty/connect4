const inquirer = require('inquirer');
const Game = require('./game.js');
let game;


function turn() {
    inquirer.prompt([{
        type: "list",
        message: "choose your turn",
        name: "number",
        choices: game.getAvailable()
    }])
    .then((answers) => {
        const checkWin = game.addToBoard(answers.number)
        console.table(game.showGameBoard());
        if (checkWin) {
            console.log("winner");
            return;
        }
        turn();
    })
    .catch((error) => {
        // not sure here
    });
}













function initGame(playerOne, playerTwo) {
    game = new Game("joe", "bob", "joe");
    console.table(game.showGameBoard());
    turn();
}

initGame();