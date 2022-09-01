function lowerbond(N, K, arr) {
  let l = 0;

  let r = N - 1;
  let ans = -1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (arr[m] == K) {
      ans = m;

      r = m - 1;
   
    } else if (arr[m] > K) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let y = lowerbond(N, K, arr);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`5 2
  1 1 2 2 5`);
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
