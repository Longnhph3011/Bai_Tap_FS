function title(str) {
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return newStr.join(" ");
}

let chuoi = "welcome to javascript";
console.log(title(chuoi));
