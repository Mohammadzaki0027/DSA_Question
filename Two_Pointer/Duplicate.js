let arr = [1, 1, 1, 1, 2, 2, 4, 5, 4, 6];
arr.sort();
let arr1 = [];
function d(arr) {
  j = 0;

  for (let i = 0; i <= arr.length - 2; i++) {
    if (arr[i] != arr[i + 1]) {
      arr1[j] = arr[i];
      j++;
    }
  }
  arr1[j] = arr[arr.length - 1];
}

d(arr);
console.log(arr1);
