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
            console.log(json)
        } else {
            loginContainer().remove()
            addLogoutButton()
            console.log(json)
        }
    })
    .catch(err => console.log(err))
}

const clickLogout = event => {
    fetch(root + "/logout")
        .then(resp => resp.json())
        .then(json => {
            logoutButton().remove()
            addLoginDiv()
            console.log("successfully logged out.")
        })
    }