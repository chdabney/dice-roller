//DOM selectors
const rollButtonElement = document.querySelector('#rollButton')
let userInputBoxElement = document.querySelector('#userInputBox')
const showResultsButtonElement = document.querySelector('#showResultsButton')
const displayAllRollsListElement = document.querySelector('#displayAllRollsList')
const dieRollTotalsElement = document.querySelector('#dieRollTotals')
let numberofSidesInputBoxElement = document.querySelector('#numberofSidesInputBox')

//dire roll array
const dieRollsArray = []

// take user input and roll dice value
rollButtonElement.addEventListener('click', function () {
    let numberofDice = userInputBoxElement.value
    let numberofSides = numberofSidesInputBoxElement.value
    let index = 0
    while (index < numberofDice) {
        index++
        let dieRollValue = Math.floor(Math.random() * numberofSides) + 1
        dieRollsArray.push(dieRollValue)
    }
    let rollSum = eval(dieRollsArray.join('+'))
    dieRollTotalsElement.innerHTML = `Total: ${rollSum}`
})

//Show individual die rolls
showResultsButtonElement.addEventListener('click', function () {
    let index = 0
    while (index < dieRollsArray.length) {
        displayAllRollsListElement.innerHTML += `<li> ${dieRollsArray[index]} </li>`
        index++
    }
})
