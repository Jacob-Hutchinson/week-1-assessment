//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice(0,3)
//dont have to define .splice() to copy everything in an array
// console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE
colorCopy.push("yellow")
// console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE
const middleNums = numbers.slice(1,4)
//does not alter makes a copy
// let middleNums = numbers.splice(1, 3) modifies the array
// console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE
let answers = [];

for(let i = 0; i < bigOrSmallArray.length; i++){
  // console.log(bigOrSmallArray[i]) this for loops goes through 
  // the array bigorsmall
  if(bigOrSmallArray[i] > 100){
    answers.push("big")
    // console.log(answers)
  }else if(bigOrSmallArray[i] < 100){
    answers.push("small")
    // console.log(answers)
  }
}

// console.log(answers)