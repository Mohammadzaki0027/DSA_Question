function minsort(N, arr) {
  let low = 0;
  let high = arr.length - 1;

  if (arr[low] <= arr[high]) {
    return arr[low];
  }
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid>0 &&arr[mid] < arr[mid-1]) {
        return arr[mid]
    }
    if(mid<arr.length-1&&arr[mid]>arr[mid+1])
    {
        return arr[mid+1]
    }
    if(arr[low] <= arr[mid]) { // left array is sorted. So the pivot is on the right side
        low = mid+1;
    } else { //right array is sorted. So the pivot is on the left side
        high = mid-1;
    }
}
}
let arr=[5 ,10 ,15 ,20]
let y = minsort(N=arr.length, arr);
console.log(y);
// function runProgram(input) {
//   input = input.split("\n");
//   let N = +input[0];
//   let arr = input[1].split(" ").map(Number);
//   let y = minsort(N, arr);
//   console.log(y);
// }

// if (process.env.USERNAME === "sw") {
//   runProgram(`4
//   5 10 15 20`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("high", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
