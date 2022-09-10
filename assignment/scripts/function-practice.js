console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Nicole'));
console.log(helloName('Nora'));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 7));
console.log(addNumbers(-2, 8));
console.log(addNumbers(0.01, 0.05));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3){
    return (num1 * num2 * num3);
}
console.log(multiplyThree(3,4,5));
console.log(multiplyThree(0.5,7, 8));
console.log(multiplyThree(1.2,457,98));



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false)
isPositive(3);
isPositive(0);
isPositive(-3);

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.[

const array = [3, -5, 6, 7];
const array2 = [];
const array3 = ['eggs', 'milk', 'cheese', 'blueberries'];

function getLast( array ) {
   if (array != ''){
    return array[array.length - 1];

    /* I found a resource online that showed a way to return the last item using splice:
    return array.splice(-1)[0]; 
    I read that this makes a shallow copy of the item in the array and puts the value into a new array.
    I was wondering, does using the [array.length -] way also put the item into a new array?
    Thanks for your insight/feedback!
    */
   } else if (array == ''){
     return 'undefined';
   }
}
console.log(getLast(array));
console.log(getLast(array2));
console.log(getLast(array3));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

const array4 = [7, 9, 3, 2];

function find( value, array4 ){
  for (let i =0; i < array4.length; i++){
    if (value === array4[i]){
      return true; 
    }
  } 
     return false;

} 
console.log(find(9, array4));
console.log(find(5, array4));
console.log(find(3, array4));




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

let string = ' ';
string.split();

function isFirstLetter(letter, string) {
  for (s of string){
      if (letter == string[0]){
        return true;
      } 
  }
       return false;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(isFirstLetter('m', 'make'));
console.log(isFirstLetter('c', 'husky'));

// 9. Function to return the sum of all numbers in an array

const array5 = [7, 6, 9, 3, 4];
const array6 = [-2, -3, 4, 1];

function sumAll(array5) {
  let sum = 0
  // TODO: loop to add items
   for (let i = 0; i < array5.length; i++) {
      sum += array5[i];
   }
  return sum;
}
console.log(sumAll(array5));
console.log(sumAll(array6));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

/* This question took me a long time to figure out. I think I need more practice with 
variable scope, because it took me awhile to figure out where to declare/place the 
variables in this code.*/

const inputArray = [5, 8, 9, 0, 3];
const inputArray2 = [-6, 8, 9, 0];
const inputArray3 = [-3, -4, -5, -7];
let number = 0;

function createNewArray(arr){

   let newArray = [];  
   for (let i = 0; i < arr.length; i++){
    number = arr[i];
      if (number > 0) {
        newArray.push(number);
      }      
   }
      return newArray; 
   }
 
 console.log(createNewArray(inputArray));
 console.log(createNewArray(inputArray2));
 console.log(createNewArray(inputArray3));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it! 

//Create a function that takes a number as an argument. 
//Add up all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 
//1 + 2 + 3 + 4 = 10.

//First solution


function addUp(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++){
    sum += i;
  }
  return sum;
}
console.log(addUp(5));
console.log(addUp(6));
console.log(addUp(8));

//Second solution

function addUp(number) {
let sum2 = (number * (number + 1))/2;
for (let i = 1; i < number; i++){
}
return sum2;
}
console.log(addUp(5));
console.log(addUp(6));
console.log(addUp(8));
