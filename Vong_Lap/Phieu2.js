// Bài 1
// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 2
// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum+= i**2;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 3
// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 4
// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += 1 / (2 * i);
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 5
// function tinh(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += 1 / (2 * i + 1);
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 6

// function tinh(n) {
//   let sum = 0;
//   for (let i = 2; i <= n; i++) {
//     sum += 1 / (i * (i - 1));
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 7

// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i / (i + 1);
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 8

// function tinh(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += (2 * n + 1) / (2 * n + 2);
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 9

// function tinh(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 10

// function tinh(a, b) {
//   console.log(a ** b);
// }
// tinh(2, 3);

// Bài 11

// function tinh(n) {
//   let sum = 0;
//   let multiple = 1;
//   for (let i = 1; i <= n; i++) {
//     multiple *= i;
//     sum += multiple;
//   }
//   return sum;
// }
// let so = 8;
// console.log(tinh(so));

// Bài 12
// function tinh( n) {
//   let x = 2;
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum+= x**i;
//   }
//   return sum;
// }
// let so =5;
// console.log(tinh(so));

// Bài 13
// function tinh( n) {
//   let x = 2;
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum+= x**(2*i);
//   }
//   return sum;
// }
// let so =5;
// console.log(tinh(so));

// Bài 14
// function tinh(n) {
//   let x = 2;
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += x ** (2 * i + 1);
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 15
// function tinh(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     let tong = (i * (i + 1)) / 2;
//     sum += tong;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 16
// function tinh(n) {
//   let x = 2;
//   let sum = 0;
//   let gt = 1;

//   for (let i = 1; i <= n; i++) {
//     gt *= i;
//     let tong = Math.pow(x, i) / gt;
//     sum += tong;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));

// Bài 17
// function tinh(n) {
//   let sum = 1;
//   let x = 2;

//   for (let i = 1; i <= n; i++) {
//     let gt = 1;
//     for (let j = 1; j <= 2 * i; j++) {
//       gt *= j;
//     }
//     sum += Math.pow(x, 2 * i) / gt;
//   }
//   return sum;
// }
// let so = 5;
// console.log(tinh(so));
