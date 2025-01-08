function tachTen(str) {
  let name = str.trim().split(" ");
  if (name.length == 1) {
    return {
      firstName: "",
      middleName: "",
      lastName: name[0],
    };
  } else if (name.length == 2) {
    return { firstName: name[0], middleName: "", lastName: name[1] };
  } else {
    return {
      firstName: name[0],
      middleName: name.slice(1, -1).join(" "),
      lastName: name[name.length - 1],
    };
  }
}
let ten = "Nguyễn Văn A";
console.log(tachTen(ten));
