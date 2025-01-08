
let array = Array(100).fill(0);
let newArray = [];
for (let i = 0; i < 100; i++) {
  newArray.push(i);
}




let sum = newArray.reduce((all, currentValue)=>{
if(currentValue%5!==0)
{
    return all+ currentValue;
}

return all},0);

console.log(sum);
