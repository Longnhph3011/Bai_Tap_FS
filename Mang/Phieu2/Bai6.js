function dem(str) {
  let newStr = str.split(" ");
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    count++;
  }
  return count;
}
let chuoi = "This is a sentence aa.";
console.log(dem(chuoi));

