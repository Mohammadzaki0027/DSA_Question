function positionsearch(N, arr,K) {
let r=arr.length-1
let l=0
let ans=-1
while(l<=r)
{
 let mid=l+(Math.floor((r-l)/2)) 
if(arr[mid]===K)
{
    ans=mid
    return ans
}else if(arr[mid]>K)
{
    r=mid-1
    ans=mid
}else{
l=mid+1
}

}
return ans===-1?arr.length+1:ans
  }
  function runProgram(input) {
    input = input.split("\n");
    let N = +input[0]
    let arr = input[1].trim().split(" ").map(Number);
    let K = +input[2]
    let y = positionsearch(N, arr,K);
 console.log(y);
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`4
    1 3 5 6
    5 `);
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
  