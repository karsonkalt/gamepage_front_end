const mainMenu = () => document.querySelector("#gameListContainer")
const playSpace = () => document.querySelector("#playSpace")
const playReversiLink = () => document.querySelector("#playReversiLink")
const leaderboardLink = () => document.querySelector("#leaderboardLink")
const myScoresLink = () => document.querySelector("#myScoresLink")
const screenSpace = () => document.querySelector("#screenSpace")
const turnIndicator = () => document.querySelector("#turnIndicator")
const sendMessageTextArea = () => document.querySelector("#sendMessageField textarea")
const sendMessageButton = () => document.querySelector("#sendMessageField button")
const userScoresContainer = () => document.querySelector("#userScoresContainer")
const loginContainer = () => document.querySelector("#loginContainer")
const loginInputValue = () => document.querySelector("#loginInput").value
const loginButton = () => document.querySelector("#loginButton")
const loginField = () => document.querySelector("#loginField")
const loginError = () => document.querySelector(".loginError")
const header = () => document.querySelector("#header")
const logoutButton = () => document.querySelector("#logout")
const topUserContainer = () => document.querySelector("#topUserContainer")

// From old index file. Where does this belong?

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
