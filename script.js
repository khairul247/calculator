
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
const deleteButton = document.querySelector('#delete')
const display = document.querySelector('#display');

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
    handleOperator(operatorCounter,event);
  })
})

equalButton.addEventListener('click', ()=>{
  result = operator[previousId](a,b);
  a = result;
  display.textContent = result;
  operatorCounter = 0;

})

deleteButton.addEventListener('click',() => resetAll())

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
  display.textContent = ''
}
