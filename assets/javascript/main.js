//DOM selectors
const rollButtonElement = document.querySelector('#rollButton')
const showResultsButtonElement = document.querySelector('#showResultsButton')
const displayAllRollsListElement = document.querySelector('#displayAllRollsList')
const dieRollTotalsElement = document.querySelector('#dieRollTotals')
let userInputBoxElement = document.querySelector('#userInputBox')
let numberofSidesInputBoxElement = document.querySelector('#numberofSidesInputBox')
const resetAllButtonElement = document.querySelector('#resetAllValues')

//dice roll array
const dieRollsArray = []


// take user input and roll dice value
rollButtonElement.addEventListener('click', function () {
    let numberofDice = userInputBoxElement.value
    let numberofSides = numberofSidesInputBoxElement.value
    if (numberofDice <= 0) {
        dieRollTotalsElement.innerHTML = "<h2>Please enter a number!</h2>"
    } else {
        let index = 0
        while (index < numberofDice) {
            index++
            let dieRollValue = Math.floor(Math.random() * numberofSides) + 1
            dieRollsArray.push(dieRollValue)
        }
        let sumAllRolls = eval(dieRollsArray.join('+'))
        dieRollTotalsElement.innerHTML = `<h2>Total:</h2> <h1> ${sumAllRolls}</h1>`
        userInputBoxElement.innerHTML = " "
        numberofSidesInputBoxElement.value = " "
    }

})
//Show individual die rolls
showResultsButtonElement.addEventListener('click', function () {
    let index = 0
    while (index < dieRollsArray.length) {
        displayAllRollsListElement.innerHTML += `<li class="dice"> ${dieRollsArray[index]} </li>`
        index++
    }
    showResultsButtonElement.style.display = "none"
    resetAllButtonElement.style.display = "inline"
})

//reset all
resetAllButtonElement.addEventListener('click', function () {
    dieRollsArray.length = []
    dieRollTotalsElement.innerHTML = "<h2>Total:</h2>"
    displayAllRollsListElement.innerHTML = " "
    showResultsButtonElement.style.display = "inline"
    resetAllButtonElement.style.display = "none"
    userInputBoxElement.value = " "
    numberofSidesInputBoxElement.value = " "
})
