function wood(N, K, arr) {
  let l = 0;
  let ans = 0;
  let max = Math.max(...arr);
  while (l <= max) {
    let mid = l + Math.floor((max - l) / 2);
    if (checker(arr, K, mid)) {
      ans = mid;
      l= mid + 1;
    } else {
      max = mid - 1;
    }
  }
   return ans;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let y = wood(N, K, arr);
  console.log(y);
}

function checker(arr, K, mid) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= mid) continue;

    sum = sum + (arr[i] - mid);
  }

  return sum >= K;
}

if (process.env.USERNAME === "sw") {
  runProgram(`4 7
  20 15 10 17`);
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
