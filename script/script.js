function add(a, b) { return a + b }

function substract(a, b) { return a - b }

function multiply(a, b) { return a * b }

function divide(a, b) { return a / b }

function operate(operator, a, b) { return operator(a, b) }

let display = document.querySelector(".display")

let numberButtons = document.querySelectorAll(".number-buttons")
let operationButtons = document.querySelectorAll(".operation-buttons")
let clearButton = document.querySelector(".clear-button")
let equalButton = document.querySelector(".equal-button")

numberButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
operationButtons.forEach(button => button.addEventListener("click", () => display.textContent += button.textContent))
operationButtons.forEach(button => button.addEventListener("click", calculate))
clearButton.addEventListener("click", () => display.textContent = "")

function calculate() {

    //two operand operations OK
    // multiple operands same operation
    
    equalButton.addEventListener("click", () => {

        console.log(`display: ${display.textContent}`)
        console.log(`display array: [${display.textContent.split("")}]`)
        console.log(`operator: ${display.textContent.match(/[-×+÷]/).join("")}`)

        let numbers = display.textContent.split("")
        let regex = display.textContent.match(/[-×+÷]/).join("")

        console.log(`operatorIndex: ${numbers.findIndex(item => item == regex)}`)

        let operatorIndex = numbers.findIndex(item => item == regex)
        let firstOperand = ""
        let secondOperand = ""

        for (let i = 0; i < operatorIndex; i++) {

            firstOperand += numbers[i]
        }

        for (let j = operatorIndex + 1; j < numbers.length; j++) {

            secondOperand += numbers[j]
        }

        firstOperand = Number(firstOperand)
        secondOperand = Number(secondOperand)

        console.log(`first operand: ${firstOperand}`)
        console.log(`second operand: ${secondOperand}`)

        if (numbers[operatorIndex] == "×") {

            console.log(`result: ${operate(multiply, firstOperand, secondOperand)}`)
            display.textContent = operate(multiply, firstOperand, secondOperand)

        }

        if (numbers[operatorIndex] == "-") {

            console.log(`result: ${operate(substract, firstOperand, secondOperand)}`)
            display.textContent = operate(substract, firstOperand, secondOperand)

        }

        if (numbers[operatorIndex] == "+") {

            console.log(`result: ${operate(add, firstOperand, secondOperand)}`)
            display.textContent = operate(add, firstOperand, secondOperand)

        }

        if (numbers[operatorIndex] == "÷") {

            console.log(`result: ${operate(divide, firstOperand, secondOperand)}`)
            display.textContent = operate(divide, firstOperand, secondOperand)

        }

    }, { once: true })

}


