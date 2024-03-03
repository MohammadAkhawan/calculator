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

const resetThePrinter = () => {
    printerSectionElement.textContent = "0";
};

const clearThePrinter = () => {
    printerSectionElement.textContent = "";
};

const printTheElement = (event) => {
    if (printerSectionElement.textContent === "0") {
        clearThePrinter();
    }
    printerSectionElement.textContent += event.target.textContent;
};

clearBtnElement.addEventListener("click", resetThePrinter);

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
