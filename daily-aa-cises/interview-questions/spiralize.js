// ======================================================================
// This problem was asked for phone screen interview with (AGENCY NAME??)
//  * interview done via collabedit
//  * interview screen for Deliv (??) startup
// ======================================================================


// PROBLEM STATEMENT:
// Given a 2D array, "spiralize" it, such that starting at position 0,0 and
// moving clockwise, the "spiralize" function generates a new 1D array of all
// the elements from the 2D array in "spiral-order"

let arr1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

let arr2 = [
  [1,2,3,4,5,6],
  [12,11,10,9,8,7]
];

let arr3 = [
  [2, 3, 4, 6],
  [32, 43, 65, 76],
  [32, 43, 65, 76],
  [11, 10, 8, 7]
];

function spiralize(array) {
  let tempArray = [];
  let newArray = [];

  array.map( function(line) {
    tempArray.push(line);
  });

  tempArray.map( function(lineArray, index) {
    console.log("iteration: " + index);
    if (index === 0) {
      newArray = newArray.concat(lineArray);
      console.log(lineArray);
    } else if (index === array.length -1){
      newArray = newArray.concat(lineArray.reverse());
    } else {
      let arrLen = lineArray.length;
      newArray.push(lineArray[arrLen -1]);
      array[index].pop();
    }
  });

  array.shift();
  array.pop();

  console.log(newArray);
  // return array;

  if (array.length === 0) {
    // done
    return newArray;
  } else {
    // recursea
    return newArray.concat(spiralize(array));
  }
}

console.log(spiralize(arr1));
console.log(spiralize(arr2));
console.log(spiralize(arr3));
