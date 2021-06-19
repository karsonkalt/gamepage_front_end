class Score {
    static addAllUserScoreDivs(json) {
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
                Score.addUserScore(scoreObject[1])
            })
        }
    }

    static addUserScore(score) {
        const div = document.createElement("div")
        div.classList.add("userScore")
        div.innerHTML = `
            ${score.created_at}
            <div class="gameScore">Score: ${score.points}</div>
        `
        const parent = userScoresContainer()
        parent.appendChild(div)
    }
    
    // Instance Methods
    constructor(points, createdAt) {
        this.points = points
        this.createdAt = createdAt
    }
}