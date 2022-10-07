function ways(N)
{
   if(N===0) return 1
   if(N<0) return 0

   return ways(N-1)+ways(N-2)+ways(N-3)
}

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];

  let y = ways(N);
  console.log(y);
}

if (process.env.USERNAME === "sw") {
  runProgram(`4
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
