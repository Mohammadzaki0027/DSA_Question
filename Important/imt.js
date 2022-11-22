function Lily(arr, m, d) {
  let j = 0;
  let count = 0;
  for (let i = 0; i < (arr.length / m); i++) {
    console.log(i,"i");
    let j = i * m;
    let sum = 0;
    let b = j + m;
    while (j != b) {
      sum += arr[j];
      j++;
    }
    if (sum === d) count++;
  }
  console.log(count);
}
let arr = [1 ,2 ,1, 3, 2];
let m = 2;
let d = 3;
let y = Lily(arr, m, d);
