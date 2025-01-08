/**/
//  Mảng xuất 1 chiều
let array = [9, 2, 7, 4, 5, 6];

// console.log(array);
// -------------------------------
// Tính tổng và trung bình cộng

// function tinhTong(array) {
//   let total = 0;
//   for (let i = 0; i <array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(tinhTong(array));
// -------------------------------

// function trungBinhCong(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total / array.length;
// }
// console.log(trungBinhCong(array));
// -------------------------------

// Đảo ngược mảng

// function daoNguocMang(array) {
//   return array.reverse();
// }
// console.log(daoNguocMang(array));
// -------------------------------

// Tìm max

// function max(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// console.log(max(array));
// -------------------------------

// Tìm min

// function min(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//       }
//     }
//     return min;
//   }
//   console.log(min(array));
// -------------------------------

// Kiểm tra số nguyên tố và áp dụng vào mảng

// function soNguyenTo(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i !== 0) {
//       return true;
//     }
//   }
//   return false;
// }
// function timSoNguyenToTrongMang(x) {
//   let mangSoNguyenTo = [];
//   for (let i = 0; i < x.length; i++) {
//     if (soNguyenTo(x[i])) {
//       mangSoNguyenTo.push(x[i]);
//     }
//   }
//   return mangSoNguyenTo;
// }

// console.log(timSoNguyenToTrongMang(array));

// -------------------------------

// Tìm số lớn thứ 2

// array.sort(function (a, b) {
//   return b - a;
// });
// console.log(array[1]);
// -------------------------------

// Đếm số lần xuất hiện của 1 số trong mảng
// function dem(array, x)
// {
//     let count =0;
//     for( let i=0;i<array.length;i++)
//     {
//         if(x === array[i])
//         {
//             count++;
//         }
//     }
//     return count;
// }
// let Array = [1,1,1,3,4,5];
// let x =1;
// console.log(dem(Array,x));
// --------------------------

// Sắp xếp mảng tăng, giảm dàn

// array.sort(function (a, b) {
//   return a - b;
// });
// console.log(array);
// array.sort(function (a, b) {
//     return b - a;
//   });
//   console.log(array);
// ---------------------------

// Chèn phần tử

// array.splice(2, 0, "add");
// console.log(array);

// -----------------------
// Tìm phần tử xuất hiện duy nhất
// let array = [9, 2, 2, 4, 5, 4, 6];
