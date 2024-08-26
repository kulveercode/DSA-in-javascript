//array methods

const numbers = [1, 2, 3, 4, 5, 10, 12, 15, 20];

//map methods
const newArray = numbers.map((item) => {
    return item * 2
})
console.log(newArray);

//filter methods

const evenNumbers = numbers.filter((item) => {
    return item % 2 === 0
})
console.log(evenNumbers);

//reduce methods
const sum = numbers.reduce((prev, curr) => {
    return prev + curr
})
console.log(sum);

//concat
const num1 = [1, 3, 5, 7, 9, 11]
const num2 = [2, 4, 6, 8, 10, 12]

const newArr = num1.concat(num2);
console.log(newArr);

//array.from = convert to array

//set = used to remove duplicate elements

