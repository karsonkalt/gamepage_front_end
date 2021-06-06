const sendMessageTextArea = () => document.querySelector("#sendMessageField textarea")
const sendMessageButton = () => document.querySelector("#sendMessageField button")

const addUserMessageToMessengerWithEnter = event => {
    if (event.key === "Enter") {
        addUserMessageToMessenger()
    }
}

const addUserMessageToMessenger = event => {
    console.log("You attempted to enter chat.")
    const input = sendMessageTextArea().value.trim()
    sendMessageTextArea().value = null
    if (input != "") {
        const div = document.createElement("div")
        div.className = "message userMessage"
        div.innerHTML = `
        <div class="messagerUserName">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
            </svg>${currentUserUsername()}
        </div>
        <div class='userMessageContent'>${input}</div>
        `

        const parent = document.querySelector("#messenger div")
        parent.appendChild(div)
    }
}

const addInfoResponseToChat = response => {
    const div = document.createElement("div")
    div.className = "message gameMessage"
    div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M74 208H64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h15.94A535.78 535.78 0 0 1 64 384h128a535.78 535.78 0 0 1-15.94-128H192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-10l33.89-90.38a16 16 0 0 0-15-21.62H144V64h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8h-24V8a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v24H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v32H55.09a16 16 0 0 0-15 21.62zm173.16 251.58L224 448v-16a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v16L8.85 459.58A16 16 0 0 0 0 473.89V496a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31zm92.77-157.78l-3.29 82.2h126.72l-3.29-82.21 24.6-20.79A32 32 0 0 0 496 256.54V198a6 6 0 0 0-6-6h-26.38a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H373.1a6 6 0 0 0-6 6v26h-24.71v-26a6 6 0 0 0-6-6H310a6 6 0 0 0-6 6v58.6a32 32 0 0 0 11.36 24.4zM384 304a16 16 0 0 1 32 0v32h-32zm119.16 155.58L480 448v-16a16 16 0 0 0-16-16H336a16 16 0 0 0-16 16v16l-23.15 11.58a16 16 0 0 0-8.85 14.31V496a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-22.11a16 16 0 0 0-8.84-14.31z" />
    </svg>
    <span>${response}</span>
    `
    const parent = document.querySelector("#messenger div")
    parent.appendChild(div)
}

const addSignificantResponseToChat = response => {
    const div = document.createElement("div")
    div.className = "message gameMessageSignificant"
    div.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z" />
    </svg>
    <div>${response}</div>
    `
    const parent = document.querySelector("#messenger div")
    parent.appendChild(div)
}

const addMessengerEventListeners = () => {
    sendMessageTextArea().addEventListener("keydown", addUserMessageToMessengerWithEnter)
    sendMessageButton().addEventListener("click", addUserMessageToMessenger)
}