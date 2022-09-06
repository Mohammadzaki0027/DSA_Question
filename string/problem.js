// check the string present  in str2 is equal to str1 if equal then print yes else no also in quanity

function ransomenote(N1, N2, str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    let flag = false;
    for (let j = 0; j < str1.length; j++) {
      if (str2[i] === str1[j]) {
        let y = str1.splice(j, 1);
        flag = true;
        break;
      }
    }
    if (flag == false) {
      return false;
    }
  }
  return true;
}

function runProgram(input) {
  input = input.split("\n");
  let [N1, N2] = input[0].split(" ").map(Number);
  let str1 = input[1].trim().split(" ");
  let str2 = input[2].trim().split(" ");
  let y = ransomenote(N1, N2, str1, str2);

  y ? console.log("Yes") : console.log("No");
}

if (process.env.USERNAME === "sw") {
  runProgram(`6 5
  two times three is not four
  two times two is four`);
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
