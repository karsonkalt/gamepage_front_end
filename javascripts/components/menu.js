const mainMenu = () => document.querySelector("#gameListContainer")
const playSpace = () => document.querySelector("#playSpace")
const playReversiLink = () => document.querySelector("#playReversiLink")
const screenSpace = () => document.querySelector("#screenSpace")

const addMainMenuDiv = () => {
    const div = document.createElement("div")
        div.id = "gameListContainer"
        div.innerHTML = `
        <a id="playReversiLink" href="#" class="gameChoice inactiveChoice">
                        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 448"><path class ="svgHighlight" d="M149.33,56v80a24,24,0,0,1-24,24H24A24,24,0,0,1,0,136V56A24,24,0,0,1,24,32H125.33a24,24,0,0,1,24,24Z" transform="translate(0 -32)"/><rect class ="svgBackground" x="181.33" width="149.33" height="128" rx="24"/><path class="svgBackground" d="M125.33,192H24A24,24,0,0,0,0,216v80a24,24,0,0,0,24,24H125.33a24,24,0,0,0,24-24V216a24,24,0,0,0-24-24Z" transform="translate(0 -32)"/><rect class ="svgHighlight" x="181.33" y="160" width="149.33" height="128" rx="24"/><rect class ="svgBackground" x="362.67" width="149.33" height="128" rx="24"/><rect class ="svgBackground" y="320" width="149.33" height="128" rx="24"/><rect class ="svgBackground" x="362.67" y="160" width="149.33" height="128" rx="24"/><rect class ="svgHighlight" x="362.67" y="320" width="149.33" height="128" rx="24"/><rect class ="svgBackground" x="181.33" y="320" width="149.33" height="128" rx="24"/></svg>
                        Play Reversi</div>
                    <div class="playerNumber">Player vs. Player</div>
                    <a href="#" id="learnRulesLink" class="gameChoice activeChoice">
                        <div><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 296.999 296.999" style="enable-background:new 0 0 296.999 296.999;" xml:space="preserve"> <path class ="svgHighlight" d="M45.432,35.049c-0.008,0-0.017,0-0.025,0c-2.809,0-5.451,1.095-7.446,3.085c-2.017,2.012-3.128,4.691-3.128,7.543 v159.365c0,5.844,4.773,10.61,10.641,10.625c24.738,0.059,66.184,5.215,94.776,35.136V84.023c0-1.981-0.506-3.842-1.461-5.382 C115.322,40.849,70.226,35.107,45.432,35.049z"/> <path class ="svgHighlight" d="M262.167,205.042V45.676c0-2.852-1.111-5.531-3.128-7.543c-1.995-1.99-4.639-3.085-7.445-3.085c-0.009,0-0.018,0-0.026,0 c-24.793,0.059-69.889,5.801-93.357,43.593c-0.955,1.54-1.46,3.401-1.46,5.382v166.779 c28.592-29.921,70.038-35.077,94.776-35.136C257.394,215.651,262.167,210.885,262.167,205.042z"/> <path class ="svgHighlight" d="M286.373,71.801h-7.706v133.241c0,14.921-12.157,27.088-27.101,27.125c-20.983,0.05-55.581,4.153-80.084,27.344 c42.378-10.376,87.052-3.631,112.512,2.171c3.179,0.724,6.464-0.024,9.011-2.054c2.538-2.025,3.994-5.052,3.994-8.301V82.427 C297,76.568,292.232,71.801,286.373,71.801z"/> <path class ="svgHighlight" d="M18.332,205.042V71.801h-7.706C4.768,71.801,0,76.568,0,82.427v168.897c0,3.25,1.456,6.276,3.994,8.301 c2.545,2.029,5.827,2.78,9.011,2.054c25.46-5.803,70.135-12.547,112.511-2.171c-24.502-23.19-59.1-27.292-80.083-27.342 C30.49,232.13,18.332,219.963,18.332,205.042z"/> </svg>
                        Learn the Rules</div>
                    
                    
                    </a>
                    <a id="highScoresLink" class="gameChoice activeChoice">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path class="svgHighlight" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"/></svg>
                        High Scores
                        </div>
                        
                        </a>
        `
        const parent = playSpace()
        parent.appendChild(div)
}

const activatePlayReversiLink = () => {
    playReversiLink().classList.remove("inactiveChoice")
    playReversiLink().classList.add("activeChoice")
    playReversiLink().addEventListener("click", startGame)
}

const startGame = () => {
    screenSpace().innerHTML = `
    <div id="leftScreenSpace">
        <div id="playSpace">
            <div id="gameContainer" class="active">
                <div>
                    <div class="row">
                        <div id="1a" class="cell not-played"></div>
                        <div id="1b" class="cell not-played"></div>
                        <div id="1c" class="cell not-played"></div>
                        <div id="1d" class="cell not-played"></div>
                        <div id="1e" class="cell not-played"></div>
                        <div id="1f" class="cell not-played"></div>
                        <div id="1g" class="cell not-played"></div>
                        <div id="1h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="2a" class="cell not-played"></div>
                        <div id="2b" class="cell not-played"></div>
                        <div id="2c" class="cell not-played"></div>
                        <div id="2d" class="cell not-played"></div>
                        <div id="2e" class="cell not-played"></div>
                        <div id="2f" class="cell not-played"></div>
                        <div id="2g" class="cell not-played"></div>
                        <div id="2h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="3a" class="cell not-played"></div>
                        <div id="3b" class="cell not-played"></div>
                        <div id="3c" class="cell not-played"></div>
                        <div id="3d" class="cell not-played"></div>
                        <div id="3e" class="cell not-played"></div>
                        <div id="3f" class="cell not-played"></div>
                        <div id="3g" class="cell not-played"></div>
                        <div id="3h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="4a" class="cell not-played"></div>
                        <div id="4b" class="cell not-played"></div>
                        <div id="4c" class="cell not-played"></div>
                        <div id="4d" class="cell white"></div>
                        <div id="4e" class="cell black"></div>
                        <div id="4f" class="cell not-played"></div>
                        <div id="4g" class="cell not-played"></div>
                        <div id="4h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="5a" class="cell not-played"></div>
                        <div id="5b" class="cell not-played"></div>
                        <div id="5c" class="cell not-played"></div>
                        <div id="5d" class="cell black"></div>
                        <div id="5e" class="cell white"></div>
                        <div id="5f" class="cell not-played"></div>
                        <div id="5g" class="cell not-played"></div>
                        <div id="5h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="6a" class="cell not-played"></div>
                        <div id="6b" class="cell not-played"></div>
                        <div id="6c" class="cell not-played"></div>
                        <div id="6d" class="cell not-played"></div>
                        <div id="6e" class="cell not-played"></div>
                        <div id="6f" class="cell not-played"></div>
                        <div id="6g" class="cell not-played"></div>
                        <div id="6h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="7a" class="cell not-played"></div>
                        <div id="7b" class="cell not-played"></div>
                        <div id="7c" class="cell not-played"></div>
                        <div id="7d" class="cell not-played"></div>
                        <div id="7e" class="cell not-played"></div>
                        <div id="7f" class="cell not-played"></div>
                        <div id="7g" class="cell not-played"></div>
                        <div id="7h" class="cell not-played"></div>
                    </div>
                    <div class="row">
                        <div id="8a" class="cell not-played"></div>
                        <div id="8b" class="cell not-played"></div>
                        <div id="8c" class="cell not-played"></div>
                        <div id="8d" class="cell not-played"></div>
                        <div id="8e" class="cell not-played"></div>
                        <div id="8f" class="cell not-played"></div>
                        <div id="8g" class="cell not-played"></div>
                        <div id="8h" class="cell not-played"></div>
                    </div>
                </div>
            </div>
            <div id="turnIndicator"></div>
        </div>
    </div>

        <div id="gameLog">
            <div id="gameLogHeader">
                <h2>GameLog</h2>
                <div id="gameID">Game 1234</div>
            </div>
            <div id="messenger">
                <div style="border: 1px;">
                </div>
            </div>
            <div id="sendMessageField">
                <textarea placeholder="Chat" rows="1" cols="1" wrap="soft" id="sendMessageInput" type="field"></textarea>
                <button id="sendMessageButton">Send</button>
            </div>
        </div>
    </div>
    `
    newBoard()
    cellArray.forEach(cellNumber => {
        findCell(cellNumber).addEventListener("click", clickCell)
    })
    addMessengerEventListeners()
}

const addMainMenuEventListeners = () => {

}