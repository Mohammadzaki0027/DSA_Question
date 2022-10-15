function checker(N, arr) {
  let left = 0;
  let rigth = arr.length - 1;
  if (arr[left] <= arr[rigth]) {
    return "Yes";
  }
  while (left <= rigth) {
    let mid = left + Math.floor((rigth - left) / 2);
    if (arr[left] < arr[mid] && arr[rigth] < arr[mid]) {
      return "Yes";
    }
  }
}

function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let y = checker(N, arr);
  // console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`6
    3 4 7 9 1 2`);
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
