function gp(N, P) {
    if (N == 0) return 1;
    // S = 1 + (1/r) + (1/r^2) + (1/r^3) +... (1/r^n)
    return 1/ P**N + gp(N-1, P);
  }

  function runProgram(input) {
    input = input.split("\n");
    let [N, P] = input[0].split(" ").map(Number);
    let y = gp(N, P);
    console.log(y.toFixed(4));
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`3 5`);
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
  