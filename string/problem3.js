// #
// ##
// ###
// ####
// #####
// ######
let N = 3;

for (let i = 0; i < N; i++) {
    let str=""
  for (let j = N - 1; j >= 0; j--) {
    if (j > i) {
      stk.push("");
      str+=" "
    } else {
 
      stk.push("#");
      str+="#"
    }
  }
  console.log(str);


}
