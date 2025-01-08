// Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
let count = arrCount.reduce((all, currentValue) => {
  if (all[currentValue]) {
    all[currentValue] += 1;
  } else {
    all[currentValue] = 1;
  }
  return all;
}, {});
console.log(count);
