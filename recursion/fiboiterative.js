function fib(N) {
  let f = 0;
  let s = 1;
  let ans = 0;
  for (let i = 2; i <= N; i++) {
    ans = s + f;
    f = s;
    s = ans;
  }
  return ans;
}
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let y = fib(N);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`10`);
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
