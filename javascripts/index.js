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


const switchToBlack = element => {
    element.classList.add("black")
}



document.addEventListener("DOMContentLoaded", () => {
    // document.addEventListener("click", )
})