const newBoard = () => {
    fetch(root + "/board/new")
        .then(resp => resp.json())
        .then(json => {
            console.log("Sent GET to server and created a new board as a class variable on the server.")
            console.log(json)
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
            console.log("Post request was sent to the server.")
            Object.entries(json).forEach(cellInfo => {
                flipColor(cellInfo)
            })
        })
        .catch(err => console.log(err))
}