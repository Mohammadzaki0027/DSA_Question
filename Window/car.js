function cars(N, arr1) {
  let i = 0;
  let stk = [];
  let j = 0;
  let bypass = [];
  51243;
  let arr2 = [1, 2, 3, 4, 5];
  while (i < N) {
    if (arr1[i] === arr2[j]) {
      stk.push(arr1[j]);
      j++;
      i++;
    } else {
      bypass.push(arr1[i]);
      i++;
    }
  }
  bypass.reverse();
  let f = 0;
  if (j < arr1.length) {
    while (j < arr1.length) {
      if (bypass[f] !== arr2[j]) {
        return false;
      }

      j++;
      f = f + 1;
    }
    return true;
  }
return true
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

    let y = cars(N, arr);
    y ? console.log("Yes") : console.log("No");
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`1
   5
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
