function minandmax(N, arr, K) {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let max = 0;
  let minsum = 0;

  for (let i = 0; i < K; i++) {
    minsum += arr[i];
  }
  for (i = arr.length - 1; i >= arr.length - K; i--) {
    max += arr[i];
  }
  console.log(max - minsum);
}
function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let t = +input[0];
  for (let i = 0; i < t; i++) {
    let [N, K] = input[line].trim().split(" ").map(Number);
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;

    let y = minandmax(N, arr, K);
    //console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`1
    5 1
    1 2 3 4 5`);
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
