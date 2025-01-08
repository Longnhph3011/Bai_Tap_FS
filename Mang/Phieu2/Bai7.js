function kiemTra(str) {
  let newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return true;
  }
  return false;
}
let chuoi = "madam";
console.log(kiemTra(chuoi));
