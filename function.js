'use strict'
/**
 ****************************************************************************************************
 * ### Function
 ****************************************************************************************************
 * Fundamental building block in the program
 * Subprogram can be used multiple times
 * Performs a task or calculates a value

 * Function declaration
 *   - function name(param1, param2) { body... return;}
 *   - one function === one thing
 *     e.g., createCardAndPoint -> createCard, createPoint
 *   - function is object in JS
*/

function printHello() {
  console.log('Hello')
}

printHello()

function log(message) {
  console.log(message)
}

log('Hello')

/**
 ****************************************************************************************************
 * ### Parameters
 ****************************************************************************************************
 * Primitive parameters : passed by value
 * Object parameters : passed by reference
 */
function changeName(obj) {
  obj.name = 'JisungLee'
}
const jisung = { name: 'jisung' }
changeName(jisung)
console.log(jisung)

/**
 ****************************************************************************************************
 * ### Default parameters (added in ES6)
 ****************************************************************************************************
 */
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage('Hi')

/**
 ****************************************************************************************************
 * ### Rest parameters (added in ES6)
 ****************************************************************************************************
 */
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }

  for (const arg of args) {
    console.log(arg)
  }
}
printAll('js', 'kurt', 'JisungLee')

/**
 ****************************************************************************************************
 * ### Function expression
 ****************************************************************************************************
 * What is diff? (Function declaration vs Function expression)
 * A function declaration can be called earlier than it is defined. (hoisted)
 * A function expression is created when the execution reaches it.
 */
function sum(a, b) {
  return a + b
}
const print = function () {
  // Anonymous function
  console.log(`print`)
}
print()

const printAgain = print
printAgain()

const sumAgain = sum
console.log(sumAgain(1, 3))

/**
 ****************************************************************************************************
 * ### Callback function using function expression
 ****************************************************************************************************
 */
function randomQuiz(answer, yesCallback, noCallback) {
  if (answer === 'helloworld') {
    yesCallback()
  } else {
    noCallback()
  }
}

// Anonymous function
const printYes = function () {
  console.log('yes!')
}

// named function
// better debugging in debugger's stack traces
const printNo = function print() {
  console.log('no!')
}

randomQuiz('wrong', printYes, printNo)
randomQuiz('helloworld', printYes, printNo)

/**
 ****************************************************************************************************
 * ### Arrow function
 ****************************************************************************************************
 * Always anonymous
 */
const simplePrint = () => console.log('simplePrint!')
const add = (a, b) => a + b
const simpleMultiply = (a, b) => {
  // do something more
  return a * b
}

/**
 ****************************************************************************************************
 * ### IIFE(Immediately Invoked Function Expression)
 ****************************************************************************************************
 */
;(function hello() {
  console.log('IIFE')
})()