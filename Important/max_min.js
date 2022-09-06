function max_min(N, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let minsum = [];
  let maxsum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== minsum[minsum.length - 1]) {
      minsum.push(arr[i]);
    }
    if (minsum.length === 3) {
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== maxsum[maxsum.length - 1]) {
      maxsum.push(arr[i]);
    }
    if (maxsum.length === 3) {
      break;
    }
  }
  console.log(minsum.join(" "));
  console.log(maxsum.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");

  let N = +input[0];

  let arr = input[1].trim().split(" ").map(Number);

  let y = max_min(N, arr);
  //console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`8
    1 2 3 4 2 1 6 5`);
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
