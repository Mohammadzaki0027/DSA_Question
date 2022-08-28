function pairsumgreaterthank(N, arr, K) {
  // Brute Force approach O(N2)

//   let sum = 0;
//   let max = -1;
  // for(let i=0;i<arr.length;i++)
  // {

  //     for(let j=i+1;j<arr.length;j++)
  //     {
  //         let sum=arr[i]+arr[j]
  //         if(sum<K)
  //         {
  //             if(max<sum)
  //             {
  //                 max=sum
  //             }
  //         }
  //     }
  // }
  // console.log(max);

//   arr.sort time complexitivity LogN and the this NLOGN
arr=arr.sort(function (a, b) {
    return a - b;
  });

  let max = -1;
  let left = 0;
  let rigth = N- 1;
  while (left < rigth) {
    let sum = arr[left] + arr[rigth];

    if (sum < K) {
      if (sum>max) {
        max = sum;
    }
    left++;
} 
else {
      rigth--;
    }
  }

  return max;

}

function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let t = +input[0];
  for (let i = 0; i < t; i++) {
    let N = +input[line];
    line++;
    let arr = input[line].trim().split(" ").map(Number);
    line++;
    let K = +input[line];
    line++;
    let y = pairsumgreaterthank(N, arr, K);
    console.log(y);
  }
}

if (process.env.USERNAME === "sw") {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
