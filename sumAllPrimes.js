/*Input: number, positive, integer

Output: Boolean

Example
Input: 2   output: true
Input 10  output: false

Check numbers 2 through input -1
	Check if input is divisible by number
		Not prime(return false)
	If not divisible
		Repeat with next number
Is prime(return true)*/

function isPrime(num){
  for(var n = 2; n < num; n++){
    if (num % n == 0){
      return false;
    }
  }
  return true;
}

/*Running total = 0
Start with number 2 up to including 10
	Check if prime
		Add number to running total
		Repeat with next number
Else not prime
	Repeat with next number
	
Return running total*/


function sumPrimes(num) {
 var total = 2;
  for (var n = 3; n <= num; n++){
    if (isPrime(n)){
      total += n;
    }
  }
  return total;
}

sumPrimes(10);
