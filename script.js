
// const and var section
const operator = {
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => b === 0 ? 'How Dare You!' : a/b
}

const numberButtons = document.querySelectorAll('.numberButtons button');
const operatorButtons = document.querySelectorAll('.operatorButtons button');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const display = document.querySelector('#display');
const deleteButton = document.querySelector('#delete');

let currentNumber = "";
let operatorCounter = 0;
let result = 0;
let currentId = "";
let previousId = "";
let a = 0;
let b = 0;
let isFirstNumberEntered = false;

// event listener section

numberButtons.forEach(button =>{
  button.addEventListener('click', (event) => {
    currentNumber += event.target.textContent;
    display.textContent = currentNumber;

    if (isFirstNumberEntered){
      b = Number(currentNumber);
    } else{
      a = Number(currentNumber);
    }

  })
})

operatorButtons.forEach(button => {
  button.addEventListener('click', (event) =>{
    isFirstNumberEntered = true;
    operatorCounter++
    console.log(operatorCounter)
    handleOperator(operatorCounter,event);
  })
})

equalButton.addEventListener('click', ()=>{
  if (typeof operator[previousId] == 'function'){
  result = Math.round(operator[previousId](a,b)*100000)/100000;
  a = result;
  display.textContent = result;
  isFirstNumberEntered = false;
  previousId = "";
  currentNumber = "";
  operatorCounter = 0;
  } 

})

decimalButton.addEventListener('click', (event) => {
  if(!currentNumber.includes('.')){
    currentNumber += event.target.textContent;
    display.textContent = currentNumber;

    if (isFirstNumberEntered){
      b = Number(currentNumber);
    } else {
      a = Number(currentNumber)
    }
  }

})

clearButton.addEventListener('click',() => resetAll())

deleteButton.addEventListener('click',() => {
  currentNumber = currentNumber.slice(0,currentNumber.length-1)
  display.textContent = currentNumber;
})

// function section

function operate(a,b,operator){
  let value = operator(a,b);
  return value;
}

function handleOperator(operatorCounter,event){

if (operatorCounter > 1){
  currentId = event.target.id;
  result = operator[previousId](a,b);
  previousId = currentId;
  a = result;
  display.textContent = a;
  currentNumber = '';

} else{
  previousId = event.target.id;
  currentNumber = '';
}
}

function resetAll(){
  currentNumber = "";
  operatorCounter = 0;
  result = 0;
  currentId = "";
  previousId = "";
  a = 0;
  b = 0;
  isFirstNumberEntered = false;
  display.textContent = '0';
}
