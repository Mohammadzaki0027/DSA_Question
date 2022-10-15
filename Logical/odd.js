let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = i; j < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      i = j;
      break;
    } else if(arr[j]%2!==0) {
      count++;
    }
  }
  if (count > max) {
    max = count;
  }
}
console.log(max);