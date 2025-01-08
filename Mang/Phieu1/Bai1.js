let mang1 = ["tranduong"];
let mang2 = ["hitclubhiuhiu"];
let mang3 = ["aabb"];
function timKyTu(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
console.log(timKyTu(mang1[0]));
console.log(timKyTu(mang2[0]));
console.log(timKyTu(mang3[0]));
