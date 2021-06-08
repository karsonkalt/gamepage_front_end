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
        return userNames[0]
    } else if (numberOfBlack() < numberOfWhite()) {
        return userNames[1]
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
            addSignificantResponseToChat
        }
    }
}