// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];

// let windoesize = 4;
// let output = 39;
// function maxsunarray(arr, windoesize) {
//   let n = arr.length;
//   let max = -Infinity;
//   for (let i = 0; i <= n - windoesize; i++) {
//     let sum = 0;
//     for (let j = i; j <= i + windoesize - 1; j++) {
//       sum = sum + arr[j];
//     }
//     console.log(sum);
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }
// let y = maxsunarray(arr, windoesize);
// console.log(y);

// In the optimized way
let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];

let windoesize = 4;
let output = 39;
function maxsunarray(arr, windoesize) {
  let max = 0;
  for (let i = 0; i < windoesize; i++) {
    max += arr[i];
  }
  let currsum = max;
  for (let i = windoesize; i < arr.length - 1; i++) {
    currsum = currsum - arr[i - windoesize] + arr[i];
    max = Math.max(max, currsum);
  }
  return max;
}

let y = maxsunarray(arr, windoesize);
console.log(y);
