let arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let height=[1, 3 ,1 ,3 ,1 ,4 ,1 ,3 ,2, 5, 5 ,5, 5 ,5 ,5 ,5 ,5 ,5, 5 ,5 ,5, 5 ,5 ,5 ,5 ,5]
function word(word, height) {
    let stk=[]
  for (let i = 0; i < word.length; i++) {
for(let j = 0; j < arr.length; j++){
    if(word[i]===arr[j])
    {
        stk.push(j)
    }
}

  }
let final=[]
let max=0
for(let i=0;i<stk.length;i++)
{
    final.push(height[stk[i]])
    if(final[i]>max)
    {
        max=final[i]
    }
}

return max*stk.length
}
word(word="zaba", height)