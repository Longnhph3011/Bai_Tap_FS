let sum = 0;
function tinhTong(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}
let chuoi = "ab1k22p3";

console.log(tinhTong(chuoi));
