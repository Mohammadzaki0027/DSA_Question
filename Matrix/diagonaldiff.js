let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let dia1 = 0;
  let dia2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i + j == arr.length - 1) {
        dia2 += arr[i][j];
        console.log(arr[i][j]);
      }
      if (i == j) {
        dia1 += arr[i][j];
        console.log(arr[i][j]);
      }
    }
  }
  // console.log(dia1,dia2);
  return Math.abs(dia1 - dia2);
}
let y = diagonalDifference(arr);
// console.log(y);
