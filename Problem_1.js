
const reverseString = str => {
  let characters = str.split("");
  let reversedArray = characters.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
};

let input = "hello";
let output = reverseString(input);
console.log(output);
