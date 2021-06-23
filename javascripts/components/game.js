class Game {
    static findCell(num) {
        return document.getElementById(`${num}`)
    }

    static updateTurnIndicator() {
        turnIndicator().innerText = `${currentUserUsername()}'s turn`
    }

    static updateGameID() {
        gameID().innerText = `Game ${currentGameId}`
    }

    static transormTurnIndicatorIntoPlayAgainButton() {
        turnIndicator().classList.remove("turn")
        turnIndicator().classList.add("gameOver")
        turnIndicator().innerHTML = `
            <a href="#">Play again</a>
        `
        turnIndicator().addEventListener("click", Menu.startGame)
    }

    static shakeTurnIndicatorIfInvalidMove() {
        if (turnIndicator().classList.contains("shake1")) {
            turnIndicator().classList.remove("shake1")
            turnIndicator().classList.add("shake2")
        } else if (turnIndicator().classList.contains("shake2")) {
            turnIndicator().classList.remove("shake2")
            turnIndicator().classList.add("shake1")
        } else {
            turnIndicator().classList.add("shake1")
        }
    }

    static numberOfBlack() {
        return document.querySelectorAll('.black').length
    }

    static numberOfWhite() {
        return document.querySelectorAll('.white').length
    }

    static numberOfTurns() {
        return this.numberOfBlack() + this.numberOfWhite() - 4
    }

    static winner() {
        if (this.numberOfBlack() > this.numberOfWhite()) {
            return userNames()[0]
        } else if (this.numberOfBlack() < this.numberOfWhite()) {
            return userNames()[1]
        } else {
            return null
        }
    }

    static winnerNumberOfTokens() {
        if (this.numberOfBlack() > this.numberOfWhite()) {
            return this.numberOfBlack()
        } else if (this.numberOfBlack() < this.numberOfWhite()) {
            return this.numberOfWhite()
        } else {
            return 32
        }  
    }

    static isGameOver() {
        if (this.numberOfTurns() == 60) {
            return true
        } else if (this.numberOfBlack() == 0 || this.numberOfWhite() == 0) {
            return true
        } else {
            return false
        }
    }

    static endGameIfOver() {
        if (this.isGameOver() == true) {
            if (this.winner()) {
                Messenger.addSignificantResponseToChat(`${this.winner()} won the game with ${this.winnerNumberOfTokens()} tokens on the board!`)
            } else {
                Messenger.addSignificantResponseToChat(`The game was a tie!`)
            }
            ScoreAPI.sendScoreToServer(this.winner(), this.winnerNumberOfTokens())
            this.transormTurnIndicatorIntoPlayAgainButton()
        }
    }

    // Instance Methods
    constructor(cells, winner) {
        this.cells = cells
        this.winner = winner
    }
}