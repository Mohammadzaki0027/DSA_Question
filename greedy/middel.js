function middel(N, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (leftside(arr, i) === true && rightside(arr, i)===true) {
      return arr[i];
    }
   
  }
  return -1
}
function rightside(arr, j) {
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[j] > arr[i]) {
      return false;
    }
  }
  return true;
}
function leftside(arr, j) {
  for (let i = j - 1; i >= 0; i--) {
    if (arr[j] < arr[i]) {
      return false;
    }
  }
  return true;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;

  let N = +input[line];
  line++;
  let arr = input[line].trim().split(" ").map(Number);
  line++;

  let y = middel(N, arr);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`5
    4 3 6 7 8`);
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
