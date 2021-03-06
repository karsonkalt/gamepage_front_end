class SessionAPI {
    static clickLogin(event) {
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
                Session.addErrorMessage(json)
            } else {
                Session.displayWelcomeMessage(json.username)
                Session.addLogoutButton()
                Menu.addMainMenuDiv()
                currentUsername = json.username
                currentUserId = json.id
            }
        })
        .catch(err => console.log(err))
    }

    static clickLogout(event) {
        logoutButton().remove()
        Menu.clearScreen()
        Session.addLoginDiv()
        currentUsername = ""
        currentUserId = ""
        opponentUsername = ""
        opponentUserId = ""
        currentGameId = null
    }

    static clickOpponentLogin(event) {
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
                Session.addErrorMessage(json)
            } else if (json.username == currentUsername) {
                if (loginError()) {
                    loginError().remove()
                }
                Session.addErrorMessage({errors: "You must play against another user."})
            } else {
                opponentUsername = json.username
                opponentUserId = json.id
                Menu.startGame()
            }
        })
        .catch(err => console.log(err))
    }
}