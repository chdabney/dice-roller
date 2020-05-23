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
    let sumAllRolls = 0
    for (let index = 0; index < numberofDice; index++) {
        let dieRollValue = Math.floor(Math.random() * numberofSides) + 1
        dieRollsArray.push(dieRollValue)
        sumAllRolls += dieRollValue
    }
    dieRollTotalsElement.innerHTML = `<h2>Total: ${sumAllRolls}</h2>`
})


//Show individual die rolls. Collaberated with Chase Patrick to get min value and max value to change color accordingly. 
showResultsButtonElement.addEventListener('click', function () {
    for (let index = 0; index < dieRollsArray.length; index++) {
        if (dieRollsArray[index] === 1) {
            displayAllRollsListElement.innerHTML += `<li id= "critFail" class="dice"> ${dieRollsArray[index]} </li>`
        } else if (dieRollsArray[index] == numberofSidesInputBoxElement.value) {
            displayAllRollsListElement.innerHTML += `<li id= "crit" class="dice"> ${dieRollsArray[index]} </li>`
        } else {
            displayAllRollsListElement.innerHTML += `<li class="dice"> ${dieRollsArray[index]} </li>`
        }
    }

    dieRollsArray.length = []
})

//reset all
resetAllButtonElement.addEventListener('click', function () {
    dieRollsArray.length = []
    dieRollTotalsElement.innerHTML = "<h2>Total:</h2>"
    displayAllRollsListElement.innerHTML = " "
    userInputBoxElement.value = " "
    numberofSidesInputBoxElement.value = " "
})
