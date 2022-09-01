function upperbond(N, K, arr) {
  let r = N - 1;
  let l = 0;
  let ans = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid]<K) {
        console.log(arr[mid]);
     return ans=mid+1
    } else if (arr[mid] > K) {
      r = mid - 1;
    }
  }
  return ans
}
function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let y = upperbond(N, K, arr);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
