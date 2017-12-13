// Get the first letter = firstChar
// Check if the next character is the next character in alphabet
// 3 Check if another character is available
// 4. Repeat line 2 with the next character
// 	5 else
// 		6 return undefined
// 7 else
// 	Return expected Character


function fearNotLetter(str) {

  for (var i=0; i< str.length-1; i++){
    if(str.charCodeAt(i+1) === str.charCodeAt(i)+1){
      console.log("next character is the next alphabetically");
    }else{
      console.log("found missing char");
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
}
  return undefined;
}

fearNotLetter("abcde");
