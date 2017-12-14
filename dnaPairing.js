// Pseudo code :

// DNA Pairing

// Input - string of unmatched DNA segments, Letters “ATCG”, will only give one case(capital), no limit to input length.

// Output - array of dna pairs => 2 character array. A<->T && C<->G, same length as the input

// Solution:
// input : GCG output: [[G,C],[C,G],[G,C]]

// 1 split input into a Char array
// 2 get first character = firstChar
// 3 check if firstChar is G
// 	Create pair [G,C]
// 4 else if firstChar is C
// 	Create Pair [C,G]
// 5 else if firstChat is T
// 	Create pair [T,A]
// 6 else 
// 	Create pair [A,T]
// End if
// 7 push to dna strand
// Repeat step 3 for additional chars
// Return DNA strand




function pairElement(str) {
  var dna =[];
  var splitStr = str.split("");
  for(var i=0; i<splitStr.length;i++){
    if (splitStr[i] == "G"){
      dna.push([splitStr[i], "C"]);
    }else if (splitStr[i] == "C"){
      dna.push([splitStr[i], "G"]);
  }else if (splitStr[i] == "A"){
      dna.push([splitStr[i], "T"]);
  }else if (splitStr[i] == "T"){
      dna.push([splitStr[i], "A"]);
  }
} return dna;
}
pairElement("GCG");
