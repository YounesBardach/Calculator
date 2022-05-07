let add = function (a, b) { return a + b }

let substract = function (a, b) { return a - b }

let multiply = function (a, b) { return a * b }

let divide = function (a, b) { return a / b }

let operate = function (operator, a, b) { return operator(a, b) }

let display = document.querySelector(".display")

let numberButtons = document.querySelectorAll(".number-buttons")
let operationButtons = document.querySelectorAll(".operation-buttons")
let clearButton = document.querySelector(".clear-button")
let backSpaceButton = document.querySelector(".backspace-button")
let decimalsButton = document.querySelector(".decimals-button")
let equalButton = document.querySelector(".equal-button")

window.addEventListener("keydown", e => {

    if (document.querySelector(`[data-key="${e.keyCode}"]`)) {

        document.querySelector(`[data-key="${e.keyCode}"]`).click()

    }

})

numberButtons.forEach(button => button.addEventListener("click", () => {

    display.textContent += button.textContent
    event.target.blur()

}))

operationButtons.forEach(button => button.addEventListener("click", () => {

    display.textContent += button.textContent
    event.target.blur()

}))

clearButton.addEventListener("click", () => {

    display.textContent = ""
    event.target.blur()

})

backSpaceButton.addEventListener("click", () => {

    display.textContent = display.textContent.slice(0, length - 1)
    event.target.blur()

})

decimalsButton.addEventListener("click", () => {

    display.textContent += decimalsButton.textContent
    event.target.blur()

})

equalButton.addEventListener("click", () => {

    event.target.blur()

    if (display.textContent.match(/\.\d+\.|\.\.|^\.+$/)) {

        display.textContent = "Malformed expression"
        return setTimeout(() => display.textContent = "", 2000)

    }

    while (display.textContent.search(/[+-]{2}/) != -1) {

        display.textContent = display.textContent.replace(/-\+|\+-/g, "-").replace(/[+]{2}|[-]{2}/g, "+")

    }

    if (display.textContent.match(/^[+-]\.*$/)) {

        display.textContent = "Malformed expression"
        return setTimeout(() => display.textContent = "", 2000)

    }

    let numbers = display.textContent.split(/[-×+÷]/).filter(number => number != "").map(stringNumber => Number(stringNumber))

    let z

    while (display.textContent.search(/^[+-]/) != -1) {

        z = display.textContent.match(/^[+-][\d\.]+/)
        numbers[0] = Number(z)

        if (display.textContent.search(/^[-][.\d]+$/) != -1) { return }

        display.textContent = display.textContent.replace(/^[+-]/, "")

    }

    if (display.textContent.match(/[×÷][+]/)) {

        display.textContent = display.textContent.replace(/[×][+]/g, "×").replace(/[÷][+]/g, "÷")

    }

    let negCounter = null

    let initialDisplay = display.textContent

    if (display.textContent.match(/[×÷][-]/)) {

        negCounter = display.textContent.match(/[×÷][-]/g).length
        display.textContent = display.textContent.replace(/[×][-]/g, "×").replace(/[÷][-]/g, "÷")

    }

    if (!display.textContent.match(/[-×+÷]/g)) { return }

    let operators = display.textContent.match(/[-×+÷]/g).map(sign => {

        if (sign == "-") { sign = substract }
        if (sign == "×") { sign = multiply }
        if (sign == "÷") { sign = divide }
        if (sign == "+") { sign = add }
        return sign

    })

    if (operators.length >= numbers.length) {

        display.textContent = "Malformed expression"
        return setTimeout(() => display.textContent = "", 2000)

    }

    let calculator = function (firstOperand, secondOperand) {

        let x = operators[0]
        operators.shift()
        return operate(x, firstOperand, secondOperand)

    }

    if (operators.filter(operator => operator == multiply || operator == divide).length == 0 ||
        operators.filter(operator => operator == add || operator == substract).length == 0) {

        display.textContent = Math.round(numbers.reduce(calculator) * 1000000000) / 1000000000

        if (display.textContent == Infinity || display.textContent == -Infinity) {

            display.textContent = "Division by zero is undefined"
            return setTimeout(() => display.textContent = "", 2000)

        }

        if (display.textContent == "NaN") {

            display.textContent = "0 ÷ 0 is an indeterminate form"
            return setTimeout(() => display.textContent = "", 2000)

        }

        if (negCounter % 2 != 0) { display.textContent = -display.textContent }

        return

    }

    if (negCounter != null) {

        numbers = initialDisplay.split(/[×÷]-/)

        let lastItem = numbers.pop()

        numbers = numbers.map(number => {

            if (number.search(/[-×+÷]/) != -1) {

                let j = number.split(/[-×+÷]/)
                j[j.length - 1] = -Number(j[j.length - 1])
                number = j
                return number

            }

            return -Number(number)

        })

        let destructure = []

        for (let i = 0, j = 0; i < numbers.length; i++, j++) {

            if (Array.isArray(numbers[i])) {

                destructure[j] = numbers[i][0]
                numbers[i].shift()
                if (numbers[i].length != 0) { i-- }

            }

            else (destructure[j] = numbers[i])

        }

        destructure.push(...lastItem.split(/[-×+÷]/))
        numbers = destructure.map(item => Number(item))

        if (Number(z) < 0) {numbers[0] = -numbers[0]}

    }

    let superiorOperatorsX = []
    let superiorOperatorsDiv = []

    for (let i = 0; i < operators.length; i++) {

        superiorOperatorsX.push(display.textContent.match(/[-×+÷]/g).indexOf("×", i))

    }

    for (let i = 0; i < operators.length; i++) {

        superiorOperatorsDiv.push(display.textContent.match(/[-×+÷]/g).indexOf("÷", i))

    }

    superiorOperatorsX = superiorOperatorsX.filter(item => item > -1)
    superiorOperatorsDiv = superiorOperatorsDiv.filter(item => item > -1)
    let superiorOperatorsIndexes = [...new Set([...superiorOperatorsX, ...superiorOperatorsDiv])].sort((a, b) => a - b)

    superiorOperatorsIndexes.map(opind => {

        numbers[opind + 1] = operate(operators[opind], numbers[opind], numbers[opind + 1])
        numbers[opind] = ""

    })

    numbers = numbers.filter(number => number !== "")
    operators = operators.filter(op => op != divide && op != multiply)

    display.textContent = Math.round(numbers.reduce(calculator) * 1000000000) / 1000000000

    if (display.textContent == Infinity || display.textContent == -Infinity) {

        display.textContent = "Division by zero is undefined"
        return setTimeout(() => display.textContent = "", 2000)

    }

    if (display.textContent == "NaN") {

        display.textContent = "0 ÷ 0 is an indeterminate form"
        return setTimeout(() => display.textContent = "", 2000)

    }

})

    //one operation OK
    //multiple operations: operators with same precedence OK
    //0 division and multiplication OK
    //multiple operations: operators with different precedences OK
    //decimals OK
    //keyboard support OK
    //chain of minuses/pluses OK
    //starting minus/plus OK
    //Remove conflicts between clicks and keydowns from focus OK



