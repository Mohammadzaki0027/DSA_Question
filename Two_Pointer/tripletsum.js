function triplet(N, arr, K) {
  // Brute force approach is to used the three nested loop TC O(N)
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let a = j + 1; a < N; a++) {
        sum = arr[i] + arr[j] + arr[a];
        if (sum === K) {
          return "Yes";
        }
      }
    }
  }
  return "No";
}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let t = +input[0];
  for (let i = 0; i < t; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    let K = +input[line];
    line++;
    let y = triplet(N, arr, K);
    console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
   60`);
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
