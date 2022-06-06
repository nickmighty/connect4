const inquirer = require('inquirer');
const figlet = require('figlet');
const Table = require('tty-table');
const Game = require('./game.js');
let game;

const options = {
    borderStyle: "dashed",
    borderColor: "yellow",
    headerAlign: "center",
    align: "left",
    color: "white",
    truncate: "...",
    width: "90%"
}

let head = new Array(7).fill("");
let header = head.map((e, i) => {
    return {
        value: i.toString(),
        headerColor: "cyan",
        color: "white",
        align: "center",
        width: 7,
        formatter: function (value) {
            return value === "red" 
                ? this.style("●", "red")
                : value === "white" 
                ? this.style("●", "white")
                : "";
        }
    }
});

function turn() {
    inquirer.prompt([{
        type: "list",
        message: "It's your turn",
        name: "number",
        choices: game.getAvailable()
    }])
        .then((answers) => {
            const checkWin = game.addToBoard(answers.number);
            const render = Table(header, game.showGameBoard(), null, options).render();
            console.log(render)
            if (checkWin) {
                printWinner(checkWin);
                return;
            }
            turn();
        })
        .catch((error) => {
            console.log(error);
        });
}

function printWinner(winner) {
    figlet.text(`Congrats ${winner}!`, {
        font: 'digital',
        horizontalLayout: 'full',
        verticalLayout: 'full',
        width: 100,
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}


function initGame() {
    let colorRed = "red";
    let colorwhite = "white";
    game = new Game(colorRed, colorwhite, colorRed);
    const render = Table(header, game.showGameBoard(), null, options).render();
    console.log(render)
    turn();
}

figlet.text(`Connect Four`, {
    horizontalLayout: 'full',
    verticalLayout: 'full',
    width: 100,
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log("")
    console.log(data);
    initGame();
});

