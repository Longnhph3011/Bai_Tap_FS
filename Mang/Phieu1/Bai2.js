const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
];

let namNu = { nam: 0, nu: 0 };
let tuoi = { treCon: 0, thanhNien: 0, nguoiGia: 0 };

for (let check of listPersons) {
  if (check.gender == "nam") {
    namNu.nam++;
  } else if (check.gender == "nữ") {
    namNu.nu++;
  }
  if (check.age >= 30) {
    tuoi.nguoiGia++;
  } else if (check.age >= 18) {
    tuoi.thanhNien++;
  } else {
    tuoi.treCon++;
  }
}
console.log(namNu);
console.log(tuoi);

