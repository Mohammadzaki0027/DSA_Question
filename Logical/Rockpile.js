function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let line = 1;

  for (let i = 0; i < N; i++) {
    let q = +input[line];
    line++;
    let arr = input[line].trim().split("");
    line++;
    let count = 0;
    if (i === 0) {
      count = arr.length;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "-") {
        count--;
      } else {
        count++;
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === "sw") {
  runProgram(`4
    3
    ---
    4
    ++++
    2
    -+
    5
    ++-++
    `);
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
