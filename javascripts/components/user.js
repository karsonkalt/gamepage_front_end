const topUserContainer = () => document.querySelector("#topUserContainer")

const addAllTopUserDivs = json => {
    const div = document.createElement("div")
    div.id = "topUserContainer"
    const parent = playSpace()
    parent.appendChild(div)

    Object.entries(json).forEach(userObject => {
        addTopUser(userObject[1])
    })
}

const addTopUser = userObject => {
    const div = document.createElement("div")
    div.classList.add("topUser")
    div.innerHTML = `
        ${userObject.user.username}
        <div class="averageScore">Average Score: ${userObject.average_score}</div>
    `
    const parent = topUserContainer()
    parent.appendChild(div)
}