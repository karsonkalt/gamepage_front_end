const root = "http://localhost:3000"

let currentUsername = ""
let currentUserId = ""

let opponentUsername = ""
let opponentUserId = ""

const userNames = () => {
    return [currentUsername, opponentUsername]
}

let currentUserUsername = () => {
    if (numberOfTurns() % 2 == 0 ) {
        return userNames()[0]
    } else {
        return userNames()[1]
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addLoginDiv()
})