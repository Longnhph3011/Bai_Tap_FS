// Bài 4: Tính tổng và tích của mảng
const arr = [49, 30, 19, 2, 29];
let sum = arr.reduce((all, sum) => all + sum, 0);
console.log(sum);

let multiply = arr.reduce((all, multiply) => all * multiply, 1);
console.log(multiply);
