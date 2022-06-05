

class Game {
    constructor(playerRed, playerBlack, whoStarts) {
        this.playerRed = playerRed;
        this.playerBlack = playerBlack;
        this.currentTurn = whoStarts;
        this.gameBoard = {
            f: ["", "", "", "", "", "", ""],
            e: ["", "", "", "", "", "", ""],
            d: ["", "", "", "", "", "", ""],
            c: ["", "", "", "", "", "", ""],
            b: ["", "", "", "", "", "", ""],
            a: ["", "", "", "", "", "", ""]
        };
    }

    showGameBoard() {
        return this.gameBoard;
    }

    addToBoard(num) {
        const reversedKeys = Object.keys(this.gameBoard).reverse();
        for (const key of reversedKeys) {
            if (!this.gameBoard[key][num]) {
                const indexOfKey = reversedKeys.indexOf(key);
                this.gameBoard[key][num] = this.currentTurn;
                this.checkToWin(indexOfKey, num, this.currentTurn);
                break;
            }
        }
        this.currentTurn === this.playerRed
            ? this.currentTurn = this.playerBlack
            : this.currentTurn = this.playerRed;
    }

   // Win logic could be better /// 
    checkToWin(y, x, player) {
        const length = Object.keys(this.gameBoard).length - 1;
        this.checkBottom(x + y, player);
        this.checkTop(length - y + x, player);
        this.checkHori(y, player);
        this.checkVert(y, x, player)
    }

    checkBottom(num, player) {
        const reversedKeys = Object.keys(this.gameBoard).reverse();
        let count = 0;
        for (const key of reversedKeys) {
            if (num >= 0) {
                if (this.gameBoard[key][num] === player) {
                    count++
                    if (count === 4) {
                        console.log(player + " " + count)
                    }
                } else {
                    count = 0;
                }
            }
            num--;
        }  
    }

    checkTop(num, player) {
        const keys = Object.keys(this.gameBoard);
        let count = 0;
        for (const key of keys) {
            if (num >= 0) {
                if (this.gameBoard[key][num] === player) {
                    count++
                    if (count === 4) {
                        console.log(player + " " + count)
                    }
                } else {
                    count = 0;
                }
            }
            num--;
        }  
    }

    checkHori(num, player) {
        const reversedKeys = Object.keys(this.gameBoard).reverse()
        const key = reversedKeys[num];
        let count = 0;
        for (let i = 0; i < this.gameBoard[key].length; i++) {
            if (this.gameBoard[key][i] === player) {
                count++
                if (count === 4) {  
                    console.log(player + " " + count)
                }
            } else {
                count = 0;
            }
        }
    }

    checkVert(num, col, player) {
        const reversedKeys = Object.keys(this.gameBoard).reverse();
        const indexOf = reversedKeys.indexOf(reversedKeys[num]);
        let count = 0;
        for (let i = indexOf; i > -1; i--) {
            console.log(reversedKeys[i])
            if (this.gameBoard[reversedKeys[i]][col] === player) {
                count++
                if (count === 4) {  
                    console.log(player + " " + count)
                }
            } else {
                count = 0;
            }
        }
    }
}



module.exports = Game