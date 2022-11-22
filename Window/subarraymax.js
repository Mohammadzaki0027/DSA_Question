function subarray(N, arr){
    let max=-Infinity
let sum=0
for(let i=0;i<arr.length;i++)
{
    sum+=arr[i]
    if(sum>max){
        max=sum
    }
    if(sum<0){
        sum=0
    }
}
console.log(max);
 }
 
 function runProgram(input) {
   input = input.trim().split("\n");
   let line = 1;
   let t = +input[0];
   for (let i = 0; i < t; i++) {
     let N = +input[line]
     line++;
     let arr = input[line].trim().split(" ").map(Number);
     line++;
 
     let y = subarray(N, arr);
 
   }
 }
 
 if (process.env.USERNAME === "sw") {
   runProgram(`2
   5
   1 2 0 4 5
   5
   3 -4 1 2 -1`);
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
 