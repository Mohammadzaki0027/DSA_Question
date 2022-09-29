function party(N,arr,arr1)
{
   let q=[]
    let count=1
    for(let i=0;i<arr.length;i++)
    {
   let x=arr[i].split(":")
 arr[i]=Number(x[0])*60+Number(x[1])
 let y=arr1[i].split(":")
 arr1[i]=Number(y[0])*60+Number(y[1])
    }
    let em=0
    console.log("Arrival",arr);
    console.log("departure",arr1);
    for(let i=0;i<arr.length;i++)
    {
  if( arr1[i]>arr[i+1])
  {
count++
q.push(arr1[i])
  }
  }

}

function runProgram(input) {
    input = input.trim().split("\n");
    let N = +input[0]
 let arr=input[1].trim().split(" ")
 let arr1=input[2].trim().split(" ")

 
    let x=party(N,arr,arr1);
 
  }
  
  if (process.env.USERNAME === "sw") {
    runProgram(`6
    9:00 9:40 9:50 11:00 15:00 18:00
    9:10 12:00 11:20 11:30 19:00 20:00`);
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
  