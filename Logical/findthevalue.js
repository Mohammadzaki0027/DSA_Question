// a+b = 100

// a+c = 101

// b+c = 101

// // a+b+c = 151
// FIND THE VALUE OF A,B,C

function Numbers(arr) {
let a=Math.abs(arr[arr.length-1]-arr[0]-arr[1])
let b=arr[0]-a
let c=arr[arr.length-1]-a-b

console.log(a,b,c);
}

function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let line = 1;
  for (let i = 0; i < N; i++) {
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    Numbers(arr);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`1
   100 101 101 151`);
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
