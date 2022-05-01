let add = function (a, b) { return a + b }

let substract = function (a, b) { return a - b }

let multiply = function (a, b) { return a * b }

let divide = function (a, b) { return a / b }

let operate = function (operator, a, b) { return operator(a, b) }

let display = document.querySelector(".display")

let numberButtons = document.querySelectorAll(".number-buttons")
let operationButtons = document.querySelectorAll(".operation-buttons")
let clearButton = document.querySelector(".clear-button")
let equalButton = document.querySelector(".equal-button")

numberButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
operationButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
clearButton.addEventListener("click", () => display.textContent = "")

equalButton.addEventListener("click", () => {

    let numbers = display.textContent.split(/[-×+÷]/).map(stringNumber => Number(stringNumber)).filter(number => number > 0)

    if (numbers.length <= 1) { return }

    let operators = display.textContent.match(/[-×+÷]/g).map(sign => {

        if (sign == "-") { sign = substract }
        if (sign == "×") { sign = multiply }
        if (sign == "÷") { sign = divide }
        if (sign == "+") { sign = add }
        return sign

    })

    console.log(`numbers: [${numbers}]`)
    console.log(`operators: [${operators}]`)
    console.log(numbers.length)
    console.log(operators.length)

    if (operators.length >= numbers.length) { return display.textContent = "Malformed expression" }

    if (operators.filter(operator => operator == multiply || operator == divide).length == 0 ||
        operators.filter(operator => operator == add || operator == substract).length == 0) {

        return display.textContent = numbers.reduce((firstOperand, secondOperand) => {

            let x = operators[0]
            operators.shift()
            return operate(x, firstOperand, secondOperand)

        })

    }



})

    //one operation OK
    //multiple operations: operators with same precedence OK
    //multiple operations: operators with different precedences


