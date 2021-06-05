const cellArray = () => {
    const array = []
    const addNumber = array =>{
        let i = 1
        while (i <= 64) {
            array.push(i)
            i++
        }
    }
    addNumber(array)
    return array
}

const findCell = num => document.getElementById(`${num}`)


const switchToBlack = event => {
    event.target.classList.add("black")
}

const switchToWhite = event => {
    event.target.classList.add("black")
}



document.addEventListener("DOMContentLoaded", () => {
    // findCell(1).addEventListener("click", () => {
    //     console.log("Is this working.")
    // })
    cellArray().forEach(cellNumber => {
        findCell(cellNumber).addEventListener("click", switchToBlack)
    })
})