// Bài 1: Sắp xếp mảng sau theo thứ tự độ tuổi giảm dần
let array=
[
  { name: 'name1', age: 12 },
  { name: 'name2', age: 20 },
  { name: 'name3', age: 15 },
  { name: 'name4', age: 10 },
  { name: 'name4', age: 27 }
];
let sort =  array.sort((a,b)=>(b.age-a.age));
console.log(sort);

// Bài 2: Viết code chuyển mảng đã sắp xếp ở bài 1 thành mảng tên
// VD: [‘name4’, ‘name2’, ‘name3’, ‘name1’]
let newArray = [];
for (let newSort of array) {
    if (!newArray.includes(newSort.name)) {
      newArray.push(newSort.name);
    }
  }
console.log(newArray);
