function fib(N)
{
    if(N===0||N===1) return N

    return fib(N-1)+fib(N-2)
}
function runProgram(input){
    input=input.split("\n")
    let N=+input[0]
   let y= fib(N)
    console.log(y)
}


 

if (process.env.USERNAME === "sw") {
  runProgram(`4`);
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