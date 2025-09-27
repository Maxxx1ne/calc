import { calculate } from "./calc.js";

const inputANode = document.querySelector(".js-num-a");
const inputBNode = document.querySelector(".js-num-b");
const selectOperationNode = document.querySelector(".js-select-operation");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

btnResultNode.addEventListener("click", () => {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value)

    const operation = selectOperationNode.value;

    const result = calculate({ a, b, operation });

    outputNode.textContent = `Результат ${result}`
})