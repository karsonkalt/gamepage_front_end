const cellArray = [
    "1a", "1b", "1c", "1d", "1e", "1f", "1g", "1h",
    "2a", "2b", "2c", "2d", "2e", "2f", "2g", "2h",
    "3a", "3b", "3c", "3d", "3e", "3f", "3g", "3h",
    "4a", "4b", "4c", "4d", "4e", "4f", "4g", "4h",
    "5a", "5b", "5c", "5d", "5e", "5f", "5g", "5h",
    "6a", "6b", "6c", "6d", "6e", "6f", "6g", "6h",
    "7a", "7b", "7c", "7d", "7e", "7f", "7g", "7h",
    "8a", "8b", "8c", "8d", "8e", "8f", "8g", "8h"
]

const findCell = num => document.getElementById(`${num}`)

const turnIndicator = () => document.querySelector("#turnIndicator")

const updateTurnIndicator = () => {
    turnIndicator().innerText = `${currentUserUsername()}'s turn`
}

const shakeTurnIndicatorIfInvalidMove = () => {
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

const numberOfBlack = () => {
    return document.querySelectorAll('.black').length
}

const numberOfWhite = () => {
    return document.querySelectorAll('.white').length
}

const numberOfTurns = () => {
    return numberOfBlack() + numberOfWhite() - 4
}

const winner = () => {
    if (numberOfBlack() > numberOfWhite()) {
        return userNames()[0]
    } else if (numberOfBlack() < numberOfWhite()) {
        return userNames()[1]
    } else {
        return null
    }
}

const winnerNumberOfTokens = () => {
    if (numberOfBlack() > numberOfWhite()) {
        return numberOfBlack()
    } else if (numberOfBlack() < numberOfWhite()) {
        return numberOfWhite()
    } else {
        return 32
    }  
}

const isGameOver = () => {
    if (numberOfTurns() == 60) {
        return true
    } else if (numberOfBlack() == 0 || numberOfWhite() == 0) {
        return true
    } else {
        return false
    }
}

// TODO This is firing way too many times, not sure why

const endGameIfOver = () => {
    if (isGameOver() == true) {
        if (winner()) {
            addSignificantResponseToChat(`${winner()} won the game with ${winnerNumberOfTokens()} tokens on the board!`)
        } else {
            addSignificantResponseToChat(`The game was a tie!`)
        }
        console.log(`Score: ${winnerNumberOfTokens()}`)
        sendScoreToServer()
    }
}