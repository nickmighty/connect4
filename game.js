class Game {
    constructor(playerRed, playerWhite, whoStarts) {
        this.playerRed = playerRed;
        this.playerWhite = playerWhite;
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
        return Object.values(this.gameBoard);
    }

    addToBoard(num) {
        const reversedKeys = Object.keys(this.gameBoard).reverse();
        for (const key of reversedKeys) {
            if (!this.gameBoard[key][num]) {
                const indexOfKey = reversedKeys.indexOf(key);
                this.gameBoard[key][num] = this.currentTurn;
                const isWin = this.checkToWin(indexOfKey, num, this.currentTurn);
                if (isWin) {
                    return this.currentTurn;
                }
                break;
            }
        }
        this.currentTurn === this.playerRed
            ? this.currentTurn = this.playerWhite
            : this.currentTurn = this.playerRed;
    }

    getAvailable() {
        const reversedKeys = Object.keys(this.gameBoard);
        return this.gameBoard[reversedKeys[0]].map((e, i) => e === "" ? i : "").filter(e => typeof e === "number");
    }

   // Win logic could be better /// 
    checkToWin(y, x, player) {
        const length = Object.keys(this.gameBoard).length - 1;
        if ( this.checkBottom(x + y, player) || this.checkTop(length - y + x, player)
        || this.checkHori(y, player) || this.checkVert(y, x, player) ) {
            return true;
        } else {
            false;
        }
    }

    checkBottom(num, player) {
        const reversedKeys = Object.keys(this.gameBoard).reverse();
        let count = 0;
        for (const key of reversedKeys) {
            if (num >= 0) {
                if (this.gameBoard[key][num] === player) {
                    count++
                    if (count === 4) {
                        return true;
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
                        return true;
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
                    return true;
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
            if (this.gameBoard[reversedKeys[i]][col] === player) {
                count++
                if (count === 4) {  
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }
}

module.exports = Game