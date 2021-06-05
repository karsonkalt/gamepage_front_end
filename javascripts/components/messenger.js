const sendMessageTextArea = () => document.querySelector("#sendMessageField textarea")
const sendMessageButton = () => document.querySelector("#sendMessageField button")

const addMessageToChatWithEnter = event => {
    if (event.key === "Enter") {
        addMessageToChat()
    }
}

const addMessageToChat = () => {
    console.log("You attempted to enter chat.")
}

const addMessengerEventListeners = () => {
    sendMessageTextArea().addEventListener("keydown", addMessageToChatWithEnter)
    sendMessageButton().addEventListener("click", addMessageToChat)
}