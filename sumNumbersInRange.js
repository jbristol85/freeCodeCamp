

// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

// Psuedo Code:
// Establish minimum and maximum values from numbers given
// Store min and max in a variable
// for each number between min and max and add them together
// Return the total

// Input: [number, number], array, no order
// Output: single integer

function sumAll(arr) {
  
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
 var total=0;
  
  for(var i = min; i<=max; i++){
    total += i;
   
  }
  
return total;
}

sumAll([1, 4]);