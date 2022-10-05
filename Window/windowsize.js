let arr = [1, 4, 20, 3, 10, 5];
let n = arr.length;
let k = 33;
function movablesize(arr, n, k) {
  let sum = 0;
  let high = 0;
  for (let i = 0; i < n; i++) {
    while (sum < k && high < n) {
      sum += arr[high];
   
      high++;
    }
    if (sum === k) return "Yes";
    sum=sum - arr[i];
  }
  return "No"
}

let y = movablesize(arr, n, k);
console.log(y);
