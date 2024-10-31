// Bài 1

// let a = 8;
// let b = 9;
// let c = a * b;
// let d = 2 * (a + b);
// console.log("Chu vi hình chữ nhật là :" + d);
// console.log("Diện tích hình chữ nhật là :" + c);
// ------------------------------------------------------------
// Bài 2
// let banKinh = 80;
// let pi = 3.14159;
// let chuVi = 2 * pi * banKinh;
// let dienTich = pi * banKinh ** 2;
// console.log("Chu vi hình tròn là :" + chuVi);
// console.log("Diện tích hình tròn là :" + dienTich);
// ------------------------------------------------------------

// Bài 3
// let soDien = 300;
// let giaTien = 300 * 1500;
// console.log("Giá tiền cần trả:" + giaTien + "Đồng");
// ------------------------------------------------------------

// Bài 4
// let chieuCao = 1.8;
// let canNang = 70;
// let bmi = canNang / chieuCao ** 2;
// console.log("Chỉ số BMI:" + bmi);
// ------------------------------------------------------------

// Bài 5
// let dayLon = 10;
// let daynho = 8;
// let chieuCao = 6;
// let dienTich = ((dayLon + daynho) * chieuCao) / 2;
// console.log("Diện tích hình thang là:" + dienTich);

// Bài 6
// let soNguyen = 8;
// if (soNguyen % 2 == 0) {
//   console.log("Số chẵn");
// } else {
//   console.log("Số lẻ");
// }

//  Bài 7
// let a = 6;
// let b = 8;
// let c = 9;
// if (a > b && a > c) {
//   console.log("Số " + a + " là số lớn nhất");
// } else if (b > c) {
//   console.log("Số " + b + " là số lớn nhất");
// } else {
//   console.log("Số " + c + " là số lớn nhất");
// }

// Bài 8:
// let a = 7;
// let b = 8;
// let c = 9;
// if (
//   Math.abs(a - b) < c &&
//   c < a + b &&
//   Math.abs(a - c) < b &&
//   b < a + c &&
//   Math.abs(b - c) < a &&
//   a < c + b
// ) {
//   if (a === b || b === c || a === c) {
//     console.log("Đây là 1 tam giác cân");
//   } else if (
//     a ** a + b ** b > c ** c &&
//     c ** c + b ** b > a ** a &&
//     a ** a + c ** c > b ** b
//   ) {
//     console.log("Đây là 1 tam giác nhọn");
//   } else if (c ** c === a ** a + b ** b) {
//     console.log("Đây là tam giác vuông");
//   } else {
//     console.log("Đây là 1 tam giác");
//   }
// } else {
//   console.log("Không phải 1 tam giác");
// }

// Bài 9:
// let a = "K";
// let check = a.charCodeAt(0);
// if (check >= 65 && check <= 90) {
//   console.log(a + " là chữ in hoa");
// } else if (check >= 97 && check <= 122) {
//   console.log(a + " là chữ in thường");
// } else {
//   console.log(a + " không phải chữ cái");
// }

// Bài 10:
// let nam = 1900;
// if (nam % 4 === 0) {
//   if (nam % 100 === 0) {
//     if (nam % 400 === 0) {
//       console.log(nam + " là năm nhuận");
//     } else {
//       console.log(nam + " không phải năm nhuận");
//     }
//   } else {
//     console.log(nam + " là năm nhuận");
//   }
// } else {
//   console.log(nam + " không phải năm nhuận");
// }
