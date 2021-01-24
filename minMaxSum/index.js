const arr = [1, 2, 3, 4, 5];
const arr1 = [5, 5, 5, 5, 5];

const sortedValues = arr.sort((a, b) => a - b);
const minValues = [...sortedValues];
const maxValues = [...sortedValues];

minValues.pop();
maxValues.shift();

const sumMin = minValues.reduce((acc, value) => acc + value, 0);
const sumMax = maxValues.reduce((acc, value) => acc + value, 0);

console.log(sumMin + " " + sumMax);
