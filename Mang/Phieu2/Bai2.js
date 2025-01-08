function dem(str, char) {
  let sum = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === char) {
      sum++;
    }
  }
  return sum;
}
let str = "programming";
let char = "p";

console.log(dem(str, char));
