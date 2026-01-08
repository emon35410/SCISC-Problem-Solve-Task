const capitalizeWords = str => str.replace(/\b\w/g, c => c.toUpperCase());

let input = "hello world";
let result = capitalizeWords(input);
console.log(result);
