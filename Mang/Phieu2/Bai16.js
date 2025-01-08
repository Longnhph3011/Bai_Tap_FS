function timChuoi(str) {
  let maxStr = "";
  for (let i = 0; i < str.length; i++) {
    let currentStr = str[i];
    for (let j = i + 1; j <= length; j++) {
      if (!currentStr.include(str[j])) {
        currentStr += str[j];
      } else {
        if (currentStr.length > maxStr.length) {
          maxStr = currentStr;
        }
        break;
      }
    }
    if (currentStr.length > maxStr.length) {
      maxStr = currentStr;
    }
  }
  return maxStr;
}
console.log(timChuoi("abcdaaancbaacd"));
