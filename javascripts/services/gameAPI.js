const newBoard = () => {
    fetch(root + "/board/new")
        .then(resp => resp.json())
        .then(json => {
            addInfoResponseToChat("A new game has started.")
            updateTurnIndicator()
        })
    }

const flipColor = cellInfo => {
    if (cellInfo[1] === "black") {
        var opponent_color = "white"
    } else if (cellInfo[1] === "white") {
        var opponent_color = "black"
    }

    if (findCell(cellInfo[0]).classList.contains("not-played")) {
        findCell(cellInfo[0]).classList.remove("not-played")
        findCell(cellInfo[0]).classList.add(cellInfo[1])
    } else if (findCell(cellInfo[0]).classList.contains(opponent_color)) {
        findCell(cellInfo[0]).classList.remove(opponent_color)
        findCell(cellInfo[0]).classList.add(cellInfo[1])
    }
}

const clickCell = event => {
    fetch(root + "/board/play/" + event.target.id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(resp => resp.json())
        .then(json => {
            if (json.error) {
                shakeTurnIndicatorIfInvalidMove()
            } else {
                const numFlipped = Object.keys(json).length - 1
                if (numFlipped > 4) {
                    addInfoResponseToChat(`${currentUserUsername()} flipped ${numFlipped} tokens!`)
                }

                Object.entries(json).forEach(cellInfo => {
                flipColor(cellInfo)
                updateTurnIndicator()
                endGameIfOver()
                })
            }
        })
        .catch(err => console.log(err))
}