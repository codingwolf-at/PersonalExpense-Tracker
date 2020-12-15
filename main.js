const element = document.querySelector('#btnAddExpense');
const inputText = document.querySelector('#inputAmount');

let totalExpense = 0;

function addExpense() {
    const inputData = inputText.value;
    const expense = parseInt(inputData, 10);
    totalExpense = totalExpense + expense;
}

element.addEventListener("click", addExpense, false);