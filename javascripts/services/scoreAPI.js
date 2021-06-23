class ScoreAPI {
    static sendScoreToServer (winnerUsername, score) {
        fetch(root + "/scores/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({username: winnerUsername, score: score})
        })
    }

    static getCurrentUserScores() {
        fetch(root + "/users/" + currentUserId + "/scores")
            .then(resp => resp.json())
            .then(json => {
                Score.addAllUserScoreDivs(json)
            }) 
    }
}