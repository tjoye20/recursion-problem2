/**
 * Function that computes the sum of an array of numbers
 *
 * @param {array} numArr - Array of numbers
 * @returns {number} - Sum of the numbers in the array
 */

//Create an array of numbers
const numArr = [1, 2, 3, 4, 5, 6];

const addNumsinArr = (arr) => {
  console.log(arr.pop());
  //Base case. If the length of the array is 1, return the number in position 0 of the array "arr[0]"
  if (arr.length === 1) {
    return arr[0];
    //Else pop the last number in the array, to reduce its length, and add the rest of the numbers that are
    //left in the array
  } else {
    return arr.pop() + addNumsinArr(arr);
  }
};

console.log(addNumsinArr(numArr));
