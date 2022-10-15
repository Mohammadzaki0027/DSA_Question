function valid(N, K, arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (N > i) {
      sum1 += arr[i];
    } else {
      sum2 += arr[i];
    }
  }
  let diff = Math.abs(sum1 - sum2);
  if(K<diff) return "Valid"
  else return "Invalid"
}

function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let y=valid(N, K, arr);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`3 0
  1 2 3 4 2 1`);
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
