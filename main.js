// ref to h1 element
const headingElement = document.querySelector('#heading')
// ref to input amount 
const inputAmount = document.querySelector('#inputAmount');
// ref to input description
const inputDesc = document.querySelector('#inputDesc')
// ref to add expense button
const element = document.querySelector('#btnAddExpense');
// ref to table element 
const expenseTableElement = document.querySelector('#expenseTable');

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
    const someText = `Total: ${totalExpense}`;
    headingElement.textContent = someText;

    // Show the table
    const data1 = allExpense[0];
    const data2 = allExpense[1];
    const data2Text = `Expense: ${data2.amount} :: Desc: ${data2.desc}`;
    const data1Text = `Expense: ${data1.amount} :: Desc: ${data1.desc}`;

    const tableText = `
        <div>${data1Text}</div>
        <div>${data2Text}</div>
    `

    expenseTableElement.innerHTML = tableText; 
}

// adding event listener to add expense button
element.addEventListener("click", addExpense, false);