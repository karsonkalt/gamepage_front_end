class GameAPI {
    static newBoard() {
        fetch(root + "/board/new")
            .then(resp => resp.json())
            .then(json => {
                Messenger.addInfoResponseToChat("A new game has started")
                Game.updateTurnIndicator()
        })
    }

    static flipColor(cellInfo) {
        if (cellInfo[1] === "black") {
            var opponent_color = "white"
        } else if (cellInfo[1] === "white") {
            var opponent_color = "black"
        }

        if (Game.findCell(cellInfo[0]).classList.contains("not-played")) {
            Game.findCell(cellInfo[0]).classList.remove("not-played")
            Game.findCell(cellInfo[0]).classList.add(cellInfo[1])
        } else if (Game.findCell(cellInfo[0]).classList.contains(opponent_color)) {
            Game.findCell(cellInfo[0]).classList.remove(opponent_color)
            Game.findCell(cellInfo[0]).classList.add(cellInfo[1])
        }
    }

    static clickCell(event) {
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
                    Game.shakeTurnIndicatorIfInvalidMove()
                } else {
                    const numFlipped = Object.keys(json).length - 1
                    if (numFlipped >= 4) {
                        Messenger.addInfoResponseToChat(`${currentUserUsername()} flipped ${numFlipped} tokens!`)
                    }

                    Object.entries(json).forEach(cellInfo => {
                        GameAPI.flipColor(cellInfo)
                    })
                    Game.updateTurnIndicator()
                    Game.endGameIfOver()
                }
            })
            .catch(err => console.log(err))
    }
}