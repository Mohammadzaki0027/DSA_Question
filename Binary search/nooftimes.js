function frequency(N, K, arr) {
  let ans = 0;
  let uans = 0;
  left(N,K,arr)
  rigthside(N,K,arr)
  function left(N, K, arr) {
    let l = 0;
    let r = arr.length - 1;


    while (l <= r) {
      mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === K) {
        ans = mid;

        r = mid - 1;
      } else if (arr[mid] > K) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }

  }

  function rigthside(N, K, arr) {
    let ul = 0;
    let ur = arr.length - 1;

    while (ul <= ur) {
      mid = ul + Math.floor((ur - ul) / 2);
      if (arr[mid] === K) {
        ul = mid + 1;
        uans = mid;
      } else if (arr[mid] > K) {
        ur = mid - 1;
      } else {
        ul = mid + 1;
      }
    }

  }
console.log(uans-ans+1)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let y = frequency(N, K, arr);

}

if (process.env.USERNAME === "sw") {
  runProgram(`6 3
  2 3 3 3 6 9`);
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
