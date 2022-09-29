function angry(N,arr1,arr2)
{
   arr1.sort(function(a,b){
    return a-b
   })
   arr2.sort(function(a,b){
    return a-b
   })

   let max=0
 for(let i=0;i<arr1.length;i++)
 {
let sum=Math.abs(arr1[i]-arr2[i])
if(sum>max)
{
    max=sum
}

 }
 console.log(max);
}
function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0]
 let arr1=input[1].trim().split(" ").map(Number)
 let arr2=input[2].trim().split(" ").map(Number)
 
    let x=angry(N,arr1,arr2);
    //console.log(x);
  }
//   3
// -4 2 4
// 0 4 5
  if (process.env.USERNAME === "sw") {
    runProgram(`3
    4 -4 2
    4 0 5 
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