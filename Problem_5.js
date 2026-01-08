const removeDuplicates = arr => [...new Set(arr)];

let numbers = [1, 2, 2, 3, 4, 4];
let result = removeDuplicates(numbers);
console.log(result);
