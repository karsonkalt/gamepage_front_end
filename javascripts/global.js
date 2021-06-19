// Global DOM Selectors
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

// Constant Game References
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

// Global Variables
const root = "http://localhost:3000"

let currentUsername = ""
let currentUserId = ""
let opponentUsername = ""
let opponentUserId = ""

const userNames = () => {
    return [currentUsername, opponentUsername]
}

// Global Functions
let currentUserUsername = () => {
    if (Game.numberOfTurns() % 2 == 0 ) {
        return userNames()[0]
    } else {
        return userNames()[1]
    }
}
