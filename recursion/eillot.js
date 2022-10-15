function mainfunction(N, str, start, end, middle, ans) {
  if (start > end) {
    return ans;
  }
//   abcdefghijk
  middle = Math.floor((start + end) / 2);
  ans +=
    ans +
    str[middle] +
    mainfunction(N, str, start, middle - 1, 0, ans) +
    mainfunction(N, str, middle + 1, end, 0, ans);
  return ans;
}

function runfun(N, str) {
  let start = 0;
  let end = N - 1;
  let mid = 0;
  let ans = "";
  let y = mainfunction(N, str, start, end, mid, ans);
  console.log(y);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = Number(input[0]);
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var N = Number(input[line]);
    line++;
    var str = input[line].trim();
    line++;
    runfun(N, str);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk`);
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
