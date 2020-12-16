// ref to h1 element
const headingElement = document.querySelector('#heading')
// ref to input amount 
const inputAmount = document.querySelector('#inputAmount');
// ref to input description
const inputDesc = document.querySelector('#inputDesc')
// ref to add expense button
const element = document.querySelector('#btnAddExpense');

// init value of total expense to 0
let totalExpense = 0;

// init value of heading element to total expense 
headingElement.textContent = totalExpense;

// onButtonCLick add expense amount to total expense 
function addExpense() {
    // reading amount input element value
    const inputAmountData = inputAmount.value;
    
    // reading description input element  
    const inputDescData = inputDesc.value;

    // converting expense from string to number
    const expense = parseInt(inputAmountData, 10);
    
    // adding expense to total expense
    totalExpense = totalExpense + expense;

    // set the value of heading element to total expense 
    headingElement.textContent = totalExpense;
}

// adding event listener to add expense button
element.addEventListener("click", addExpense, false);