function etopower(N,P)
{
    console.log(N,P)
}

function runProgram(input) {
    input = input.split("\n");
    let [N,P] = input[0].split(" ").map(Number);
    let y = etopower(N,P);
    // console.log(y);
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`4 2`);
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
  