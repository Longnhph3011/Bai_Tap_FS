function xoaKhoangTrang(str) {
  let result = "";
  let newStr = str.trim();

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] != " " || (i > 0 && newStr[i - 1] != " ")) {
      result += newStr[i];
    }
  }

  return result;
}
let input = " Hello     world    ";
let output = xoaKhoangTrang(input);
console.log(output);
