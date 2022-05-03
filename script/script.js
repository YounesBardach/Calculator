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

numberButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
operationButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
clearButton.addEventListener("click", () => display.textContent = "")
backSpaceButton.addEventListener("click", () => display.textContent = display.textContent.slice(0, length - 1))
decimalsButton.addEventListener("click", () => display.textContent += decimalsButton.textContent)

equalButton.addEventListener("click", () => {

    if (display.textContent.match(/\.\d+\.|\.\.|^\.+$/)) {

        display.textContent = "Malformed expression"
        return setTimeout(() => display.textContent = "", 2000)

    }

    let numbers = display.textContent.split(/[-×+÷]/).filter(number => number != "").map(stringNumber => Number(stringNumber))

    if (display.textContent.match(/[-×+÷]/g) == null) { return }

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

        return

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

    numbers = numbers.filter(number => number != "")
    operators = operators.filter(op => op != divide && op != multiply)
    display.textContent = Math.round(numbers.reduce(calculator) * 1000000000) / 1000000000

})

    //one operation OK
    //multiple operations: operators with same precedence OK
    //0 division and multiplication OK
    //multiple operations: operators with different precedences OK
    //decimals OK
    //keyboard support OK
    //chain of minuses/pluses



