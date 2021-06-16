const sendScoreToServer = (winnerUsername, score) => {
    fetch(root + "/scores/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({username: winnerUsername, score: score})
    })
    .then(resp => resp.json())
    .then(json => {
        // Do something here to show the user.
        console.log(json)
    })
}

const getCurrentUserScores = () => {
    fetch(root + "/users/" + currentUserId + "/scores")
        .then(resp => resp.json())
        .then(json => {
            // Do something here to show the user.
            // console.log(json)
            addAllUserScoreDivs(json)
        }) 

}
