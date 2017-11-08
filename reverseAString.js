
function reverseString(str) {
    var strArray = str.split("");
    console.log(strArray);
    strArray.reverse();
    console.log(strArray);
    var reversedStr = strArray.join("");
    console.log(reversedStr);
    return reversedStr;
    
// More efficient and consolidated code:
//   return str.split("").reverse().join("");

}

reverseString("hello");
