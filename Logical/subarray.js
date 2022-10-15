// Subarrays Having Sum Less Than M
function subarray(N, K, arr) {
    let count=0
  for (let i = 0; i < arr.length; i++) {
    let bag=0
    for (let j = i; j < arr.length; j++) {
bag+=arr[j]
if(bag<K)
{
    count++
}
      
    }
  }
  console.log(count);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var tc = Number(input[0]);
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [N, K] = input[line].trim().split(" ").map(Number);
    line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;

    var x = subarray(N, K, arr);
    //   console.log(x.join(" "));
  }
}
if (process.env.USERNAME === "sw") {
  runProgram(`1
    5 5
    1 5 1 3 2`);
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
