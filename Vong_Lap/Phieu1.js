// Bài 0

// function checkSoNguyenduong(soNguyenDuong) {
//   if (soNguyenDuong <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(soNguyenDuong); i++) {
//     if (soNguyenDuong % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let so = 9;
// console.log(checkSoNguyenduong(so));

// Bài 1

// function check(soNguyenDuong) {
//   if (soNguyenDuong <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(soNguyenDuong); i++) {
//     if (soNguyenDuong % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let so = 7;
// console.log(check(so));
// ------------------

// function inSo(So) {
//   for (let i = 1; i <= So; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }
// let checkSoChan = 8;
// inSo(checkSoChan);

// Bài 2;
// function inBangCuuChuong() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`Bảng cửu chương ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// }
// inBangCuuChuong();

// Bài 3:
// function soDaoNguoc() {
//   let soDaoNguoc = 0;
//   let soDu;
//   while (so !== 0) {
//     soDu = so % 10;
//     soDaoNguoc = soDaoNguoc * 10 + soDu;
//     so = Math.floor(so / 10);
//   }
//   return soDaoNguoc;
// }
// let so = 2458;
// console.log(soDaoNguoc(so));

// Bài 4:
// function Fibonanci(n) {
//   let fib = [0, 1];
//   if (n === 1) {
//     console.log(fib[0]);
//     return;
//   }
//   if (n === 2) {
//     console.log(fib[0]);
//     console.log(fib[1]);
//     return;
//   }
//   for (let i = 2; i < n; i++) {
//     let soFib = fib[i - 1] + fib[i - 2];
//     fib.push(soFib);
//   }
//   for (let i = 0; i < n; i++) {
//     console.log(fib[i]);
//   }
// }
// let n = 5;
// Fibonanci(n);

// Bài 5:
// function tong(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// let so = 9;
// console.log(tong(so));

// function giaiThua(n) {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// }

// let so = 5;
// console.log(giaiThua(so));

// Bài 6:
// function soHoanHao(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//       sum += i;
//     }
//   }
//   return sum === n;
// }
// let so = 28;
// console.log(soHoanHao(so));

// Bài 7
// function tong(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += 1 / (i ** 3);
//   }
//   return sum.toFixed(3);
// }
// let so = 10;
// console.log(tong(so));
