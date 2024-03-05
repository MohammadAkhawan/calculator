const bigContainerElement = document.querySelector(".container");

const monitorSectionElement = document.querySelector(".monitor");
const printerSectionElement = document.querySelector(".printer");

const keysContainerElement = document.querySelector(".keys-container");

const clearBtnElement = document.querySelector("#clear");
const leftParenthesesBtnElement = document.querySelector("#leftParentheses");
const rightParenthesesBtnElement = document.querySelector("#rightParentheses");
const divisionBtnElement = document.querySelector("#division");
const number7BtnElement = document.querySelector("#number7");
const number8BtnElement = document.querySelector("#number8");
const number9BtnElement = document.querySelector("#number9");
const multiplyBtnElement = document.querySelector("#multiply");
const number4BtnElement = document.querySelector("#number4");
const number5BtnElement = document.querySelector("#number5");
const number6BtnElement = document.querySelector("#number6");
const subtractionBtnElement = document.querySelector("#subtraction");
const number1BtnElement = document.querySelector("#number1");
const number2BtnElement = document.querySelector("#number2");
const number3BtnElement = document.querySelector("#number3");
const plusBtnElement = document.querySelector("#plus");
const dotBtnElement = document.querySelector("#dot");
const number0BtnElement = document.querySelector("#number0");
const modBtnElement = document.querySelector("#modular");
const equalBtnElement = document.querySelector("#equal");

let calculated = false;

const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    mod: (a, b) => a % b,
};

const resetThePrinter = () => {
    printerSectionElement.textContent = "0";
};

const clearThePrinter = () => {
    printerSectionElement.textContent = "";
};

clearBtnElement.addEventListener("click", resetThePrinter);

const printTheElement = (event) => {
    if (printerSectionElement.textContent === "0") {
        clearThePrinter();
    }
    switch (event.target.textContent) {
        case "/":
            printerSectionElement.textContent += " / ";
            break;
        case "*":
            printerSectionElement.textContent += " * ";
            break;
        case "-":
            if (
                printerSectionElement.textContent === "" ||
                printerSectionElement.textContent.at(-1) === " "
            ) {
                printerSectionElement.textContent += "-";
                break;
            } else {
                printerSectionElement.textContent += " - ";
                break;
            }
        case "+":
            printerSectionElement.textContent += " + ";
            break;
        case "mod":
            printerSectionElement.textContent += " mod ";
            break;
        default:
            if (calculated) {
                clearThePrinter();
            }
            printerSectionElement.textContent += event.target.textContent;
            break;
    }
    calculated = false;
};

leftParenthesesBtnElement.addEventListener("click", (e) => printTheElement(e));
rightParenthesesBtnElement.addEventListener("click", (e) => printTheElement(e));
divisionBtnElement.addEventListener("click", (e) => printTheElement(e));
number7BtnElement.addEventListener("click", (e) => printTheElement(e));
number8BtnElement.addEventListener("click", (e) => printTheElement(e));
number9BtnElement.addEventListener("click", (e) => printTheElement(e));
multiplyBtnElement.addEventListener("click", (e) => printTheElement(e));
number4BtnElement.addEventListener("click", (e) => printTheElement(e));
number5BtnElement.addEventListener("click", (e) => printTheElement(e));
number6BtnElement.addEventListener("click", (e) => printTheElement(e));
subtractionBtnElement.addEventListener("click", (e) => printTheElement(e));
number1BtnElement.addEventListener("click", (e) => printTheElement(e));
number2BtnElement.addEventListener("click", (e) => printTheElement(e));
number3BtnElement.addEventListener("click", (e) => printTheElement(e));
plusBtnElement.addEventListener("click", (e) => printTheElement(e));
dotBtnElement.addEventListener("click", (e) => printTheElement(e));
number0BtnElement.addEventListener("click", (e) => printTheElement(e));
modBtnElement.addEventListener("click", (e) => printTheElement(e));

const printTheAnswerInString = (number) => {
    printerSectionElement.textContent = number.toString();
    calculated = true;
};

const simpleCalculation = (arr) => {
    const a = arr[0];
    const operator = arr[1];
    const b = arr[2];
    const calculationOperator = operators[operator];
    console.log(calculationOperator(Number(a), Number(b)));
    return calculationOperator(Number(a), Number(b));
};

const innerCalculation = (operatorString, arr) => {
    const innerMathPhrase = arr.slice(
        arr.indexOf(operatorString) - 1,
        arr.indexOf(operatorString) + 2
    );
    arr.splice(
        arr.indexOf(operatorString) - 1,
        3,
        simpleCalculation(innerMathPhrase).toString()
    );
};

const calculationWithPriority = (largeMathPhrase) => {
    while (largeMathPhrase.includes("*")) {
        for (const element of largeMathPhrase) {
            if (element === "*") {
                innerCalculation(element, largeMathPhrase);
                break;
            }
        }
    }
    while (largeMathPhrase.includes("/")) {
        for (const element of largeMathPhrase) {
            if (element === "/") {
                innerCalculation(element, largeMathPhrase);
                break;
            }
        }
    }
    while (largeMathPhrase.includes("+")) {
        for (const element of largeMathPhrase) {
            if (element === "+") {
                innerCalculation(element, largeMathPhrase);
                break;
            }
        }
    }
    while (largeMathPhrase.includes("-")) {
        for (const element of largeMathPhrase) {
            if (element === "-") {
                innerCalculation(element, largeMathPhrase);
                break;
            }
        }
    }
    while (largeMathPhrase.includes("mod")) {
        for (const element of largeMathPhrase) {
            if (element === "mod") {
                innerCalculation(element, largeMathPhrase);
                break;
            }
        }
    }

    return largeMathPhrase[0];
};

const makeOperandsAndOperator = (phrase) => {
    const splitMathPhrase = phrase.split(" ");
    const finalNumber = calculationWithPriority(splitMathPhrase);
    return finalNumber;
};

const calculate = () => {
    const requestedCalculation = printerSectionElement.textContent;
    const answer = makeOperandsAndOperator(requestedCalculation);
    printTheAnswerInString(answer);
};

equalBtnElement.addEventListener("click", calculate);
