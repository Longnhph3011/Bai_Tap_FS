// Bài 2: Nhóm các cầu thủ theo quốc gia
const team = [
  { name: "Công Phượng", country: "Việt Nam" },
  { name: "Ronaldo", country: "Portugal" },
  { name: "Quang Hải", country: "Việt Nam" },
  { name: "Messi", country: "Argentina" },
  { name: "Nani", country: "Portugal" },
];
let nhomCauThu = team.reduce((all, player) => {
  let { name, country } = player;
  if (!all[country]) {
    all[country] = [];
  }
  all[country].push(name);
  return all;
}, {});

console.log(nhomCauThu);
