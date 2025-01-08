function chuanHoa(str) {
  let tu = str.toLowerCase().split(" ");
  for (let i = 0; i < tu.length; i++) {
    tu[i] = tu[i][0].toUpperCase() + tu[i].slice(1).toLowerCase();
  }
  return tu.join(" ");
}
let str = "ngUYỄN VăN a";
console.log(chuanHoa(str));
