const addAllUserScoreDivs = json => {
    if (userScoresContainer() != null) {
        userScoresContainer().remove()
    } else {
        if (topUserContainer() != null) {
            topUserContainer().remove()
        }
        const div = document.createElement("div")
        div.id = "userScoresContainer"
        const parent = playSpace()
        parent.appendChild(div)

        Object.entries(json).forEach(scoreObject => {
            addUserScore(scoreObject[1])
        })
    }
}

const addUserScore = scoreObject => {
    const div = document.createElement("div")
    div.classList.add("userScore")
    div.innerHTML = `
        ${scoreObject.created_at}
        <div class="gameScore">Score: ${scoreObject.points}</div>
    `
    const parent = userScoresContainer()
    parent.appendChild(div)
}