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

    // init value of date
    expenseItem.moment = new Date(); 

    // pushing object to array
    allExpense.push(expenseItem);
    
    // adding expense to total expense
    totalExpense = totalExpense + inputAmountData;

    // set the value of heading element to total expense 
    const someText = `Total: ${totalExpense}`;
    headingElement.textContent = someText;

    // getting the data in tabular form via looping
    const allExpenseHTML = allExpense.map(expense => createListItem(expense));

    const joinedAllExpenseHTML = allExpenseHTML.join("")

    // setting the html of table
    expenseTableElement.innerHTML = joinedAllExpenseHTML; 
}

// adding event listener to add expense button
element.addEventListener("click", addExpense, false);

// function to create html for list
function createListItem({ desc, amount, moment }) {
    return `
        <li class="list-group-item d-flex justify-content-between">
            <div class="d-flex flex-column">
                ${desc}
                <small class="text-muted">${getDateString(moment)}</small>
            </div>
            <div>
                <span class="px-5">${amount}</span>
            </div>
            <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="fas fa-trash-alt"></i>
            </button>
        </li>
        `;
}

// function to generate date
function getDateString(moment) {
    return moment.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
}