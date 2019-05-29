// let sum = 0
function sumItems(array) {
  let sum = 0;
  // Sum all the numbers in the array
  array.forEach((item) => {
    if (Array.isArray(item)){
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

module.exports = sumItems;

// console.log(sumItems([[1, 2, [[3], 4]], 5, []]))