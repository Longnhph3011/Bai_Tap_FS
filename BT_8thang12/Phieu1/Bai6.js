const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

const flatten = (arr) => {
  let result = arr;
  let isChanged = true;

  // Lặp lại cho tới khi không còn mảng con
  while (isChanged) {
    isChanged = false;
    result = result.reduce((acc, val) => {
      if (Array.isArray(val)) {
        // Nếu phần tử là mảng, đưa các phần tử vào acc
        isChanged = true;
        return acc.concat(val);
      } else {
        // Nếu không phải mảng, thêm phần tử vào acc
        return acc.concat(val);
      }
    }, []);
  }

  return result;
};

const flattenedArray = flatten(arrFlat);

console.log(flattenedArray);
