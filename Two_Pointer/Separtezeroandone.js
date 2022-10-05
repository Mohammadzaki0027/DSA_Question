// we want output in the manner like zero will come first than one
// there is three approach
// 1) arr.sort time complexitivity=O(logN)
// 2) If use brute force Time complexitivity=O(N),Space completivity=O(N)
// 3) so we use two pointer method to solved this
[0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1];
function separate(arr, N) {
  let left = 0;
  let r = N - 1;
  while (left < r) {
    while (left < r && arr[left] === 0) {
      left++;
    }
    while (left < r && arr[r] === 1) {
      r--;
    }
    if (left < r) {
      arr[left] = 0;
      arr[r] = 1;
      left++;
      r--;
    }
  }
  console.log(arr);
}

let arr = [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1];
let y = separate(arr, (N = arr.length));
