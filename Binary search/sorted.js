let arr = [8, 11, 13, 15, 1, 4, 6];
let target = 1;

function sortedandrotated(arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target === arr[mid]) {
      ans = mid;
    }

    if (arr[low] <= arr[mid]) {
      //left  side is sorted
      if (target >= arr[low] && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target <= arr[high] && target >= arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return ans;
}

let y = sortedandrotated(arr);

console.log(y);
