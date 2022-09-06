let arr = [5, 8, 9, 6, 7, 3, 2, 10];
arr = arr.sort(function (a, b) {
  return a - b;
});

function pairequal(arr, N, K) {
  let l = 0;
  let r = N;
  while (l < r) {
    sum = arr[l] + arr[r];
    if (sum == K) {
      return "Yes";
    } else if (sum > K) {
      r--;
    } else {
      l++;
    }
  }
  return "No";
}
let y = pairequal(arr, (N = arr.length - 1), (K = 0));
console.log(y);
