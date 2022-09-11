function Knigth(N, M, R) {
  let grid = new Array(10).fill(0).map((el) => {
    return new Array(10).fill(0);
  });
  follow(N, M, R);
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  console.log(count);
  function follow(N, M, R) {
    if (N < 0 || N > 9 || M > 9 || M < 0) return;
    if (R === 0) {
      grid[N][M] = 1;
      return;
    }
    follow(N - 2, M - 1, R - 1);
    follow(N - 2, M + 1, R - 1);
    follow(N - 1, M - 2, R - 1);
    follow(N - 1, M + 2, R - 1);
    follow(N + 1, M - 2, R - 1);
    follow(N + 1, M + 2, R - 1);
    follow(N + 2, M - 1, R - 1);
    follow(N + 2, M + 1, R - 1);
  }
}

function runProgram(input) {
  input = input.split("\n");
  let [N, M, R] = input[0].split(" ").map(Number);
  let y = Knigth(N - 1, M - 1, R);
}

if (process.env.USERNAME === "sw") {
  runProgram(`3 3 1`);
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
