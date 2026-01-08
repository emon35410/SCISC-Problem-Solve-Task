const findMax = arr => {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;  
    }
  }
  return max;
};
let numbers = [5, 1, 9, 3];
let result = findMax(numbers);
console.log(result);
