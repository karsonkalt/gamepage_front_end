const root = "http://localhost:3000"

var currentUsername = ""

const userNames = () => {
    return [currentUsername, "opponent"]
}

var currentUserUsername = () => {
    if (numberOfTurns() % 2 == 0 ) {
        return userNames()[0]
    } else {
        return userNames()[1]
    }
}

document.addEventListener("DOMContentLoaded", () => {
    addLoginDiv()
})