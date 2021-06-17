const clickLogin = event => {
    fetch(root + "/sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({username: loginInputValue()})
    })
    .then(resp => resp.json())
    .then(json => {
        if (json["errors"]) {
            if (loginError()) {
                loginError().remove()
            }
            addErrorMessage(json)
        } else {
            displayWelcomeMessage(json.username)
            addLogoutButton()
            addMainMenuDiv()
            currentUsername = json.username
            currentUserId = json.id
        }
    })
    .catch(err => console.log(err))
}

const clickLogout = event => {
    fetch(root + "/logout")
        .then(resp => resp.json())
        .then(json => {
            logoutButton().remove()
            clearScreen()
            addLoginDiv()
            currentUsername = ""
        console.log("successfully logged out.")
    })
}

const clickOpponentLogin = event => {
    fetch(root + "/sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({username: loginInputValue()})
    })
    .then(resp => resp.json())
    .then(json => {
        if (json["errors"]) {
            if (loginError()) {
                loginError().remove()
            }
            addErrorMessage(json)
            debugger
        } else if (json.username == currentUsername) {
            if (loginError()) {
                loginError().remove()
            }
            addErrorMessage({errors: "You must play against another user."})
        } else {
            opponentUsername = json.username
            opponentUserId = json.id
            debugger
            // Start the game
            startGame()
        }
    })
    .catch(err => console.log(err))
}