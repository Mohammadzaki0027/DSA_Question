function searchthenumberinthearray(arr, a) {
  arr.sort(function (a, b) {
    a - b;
  });
  let r = arr.length-1;
  let l = 0;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == a) return "Present";
    else if (arr[mid] > a) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return "Not Present";
}
let arr = [1, 2, 4, 3, 5, 15, 51, 12];
let a = 15;
let y = searchthenumberinthearray(arr, a);
console.log(y);
