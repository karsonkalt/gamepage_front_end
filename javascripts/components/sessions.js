const loginContainer = () => document.querySelector("#loginContainer")
const loginInputValue = () => document.querySelector("#loginInput").value
const loginButton = () => document.querySelector("#loginButton")

const header = () => document.querySelector("#header")
const logoutButton = () => document.querySelector("#logout")

const addLogoutButton = () => {
    const a = document.createElement("a")
        a.id = "logout"
        a.innerHTML = `
                <div>LOGOUT</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
                </svg>
        `
        a.addEventListener("click", clickLogout)
        const parent = header()
        parent.appendChild(a)
}

const addLoginDiv = () => {
    const div = document.createElement("div")
        div.id = "loginContainer"
        div.innerHTML = `
        <h2 id="loginTitle">Welcome</h2>
        <p id="loginInfo">If you don't have an account, please enter a username and an account will be created for you.</p>

        <div id="loginField">
            <input placeholder="Username" rows="1" cols="1" id="loginInput" type="text">
            <button id="loginButton">Login</button>
        </div>
        `
        const parent = playSpace()
        parent.prepend(div)
        loginButton().addEventListener("click", clickLogin)
}

const addErrorMessage = errorObj => {
    const p = document.createElement("p")
        p.classList.add("loginError")
        p.innerText = `
            ${errorObj["errors"]}
        `
        const parent = loginContainer()
        parent.appendChild(p)

}

const displayWelcomeMessage = username => {
    loginContainer().innerHTML = `
        <p id="welcomeMessage">Welcome ${username}</p>
    `
}