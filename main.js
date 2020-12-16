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

// init an array for all expenses
const allExpense = [];

// init value of heading element to total expense 
headingElement.textContent = totalExpense;

// onButtonCLick add expense amount to total expense 
function addExpense() {
    // create an object for storing amount & decs pair
    const expenseItem = {};

    // reading amount input element value
    const expense = inputAmount.value;
    
    // reading description input element  
    const inputDescData = inputDesc.value;

    // converting expense from string to number
    const inputAmountData = parseInt(expense, 10);

    // init value of amount in object 
    expenseItem.amount = inputAmountData;

    // init value of desc in object
    expenseItem.desc = inputDescData

    // pushing object to array
    allExpense.push(expenseItem);
    
    // adding expense to total expense
    totalExpense = totalExpense + inputAmountData;

    // set the value of heading element to total expense 
    headingElement.textContent = totalExpense;
}

// adding event listener to add expense button
element.addEventListener("click", addExpense, false);