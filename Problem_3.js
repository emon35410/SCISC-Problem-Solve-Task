const isPalindrome = str => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};

let input1 = "madam";
let input2 = "hello";

console.log(isPalindrome(input1));
console.log(isPalindrome(input2)); 
