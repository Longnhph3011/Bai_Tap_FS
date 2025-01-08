// Bài 5: Tìm phần tử khác nhau giữa 2 mảng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
let curr = [...arr1, ...arr2];
let check = curr.reduce((all, diff) => {
  if (!arr1.includes(diff) || !arr2.includes(diff)) {
    all.push(diff);
  }
  return all;
}, []);
console.log(check);
