// Find the longest word….(FCC basic algorithms #5) 

// Return length of longest word in input.

// pair programing with Patrick and Josh

// 1.Sort through the input separating by words (str.split(‘ ‘))
// 2. Loop through words (For loop)
// 3. Compare length of word to length of next word (.length)
// 4. Store length of longer word in a variable
// 5. IF next word is longer, replace length value of variable.
// 6. Return number/length of longest word.


function findLongestWord(str) {
  var strSplit = str.split(' ');
  var lengthArr=0;

  
 for (var i = 0; i<strSplit.length; i++){
    if (lengthArr < strSplit[i].length){
     lengthArr= strSplit[i].length;
   }
   
 }
  return lengthArr;
}
                        
findLongestWord("The quick brown fox jumped over the lazy dog");

//  strSplit.forEach(function(element){
//    lengthArr.push(element.length);
//   });

//   return lengthArr.reduce(function(a, b){
//     return Math.max(a,b);
//   });
