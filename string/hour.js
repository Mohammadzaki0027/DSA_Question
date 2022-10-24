let s = "12:40:22AM";
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
function conversions() {
  if (s[8] === "P") {
    if (s[0] === "1" && s[1] === "2") {
        let ans= `${s[0]}${s[1]}${s[2]}${s[3]}${s[4]}${s[5]}${s[6]}${s[7]}`;
      return ans;
    }
  }
  if (s[8] === "A") {
    if (s[0] === "1" && s[1] === "2") {
      let ans = `00${s[2]}${s[3]}${s[4]}${s[5]}${s[6]}${s[7]}`;
      return ans;
    }
  }
  if (s[8] === "P") {

    if (s[0] !== "1" || s[1] !== "2") {
 
    let  first = Number(s[0]);
     let second = Number(s[1]);
      let final = `${first}${second}`;
    //   final = first + second;

      final = Number(final )+ 12;

      // final=(final).toString().padStart(2, 0)
      // console.log(final);

      let ans = `${final}${s[2]}${s[3]}${s[4]}${s[5]}${s[6]}${s[7]}`;
      return ans
    }
  }else {
    let ans= `${s[0]}${s[1]}${s[2]}${s[3]}${s[4]}${s[5]}${s[6]}${s[7]}`;
    return ans;
  }
}
console.log(conversions(s));
