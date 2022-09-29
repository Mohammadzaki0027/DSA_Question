function pair(tc,N,K,arr)
{
var len=arr.length;
K=K%len;
reverse(0,len-K-1,arr);
reverse(len-K,len-1,arr);
reverse(0,len-1,arr);
return arr
}
function reverse(start,end,arr)
{
    while(start<end)
    {
        temp=arr[start]
        arr[start]=arr[end]
        arr[end]=temp;
        start++;
        end--
    }
}





function runProgram(input){
    input=input.trim().split("\n")
    var tc=Number(input[0])
    var line=1;
    for(var i=0;i<tc;i++)
    {
        var [N,K]=input[line].trim().split(" ").map(Number)
        line++;
var arr=input[line].trim().split(" ").map(Number)
line++;

var x=(pair(tc,N,K,arr))
console.log(x.join(" "))

}

}
if (process.env.USER === "") {
  runProgram(``);
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