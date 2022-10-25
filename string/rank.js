let s="hhaacckkekraraannk"
let stk=[]
let checker="hackerrank"
let left=0
let right=0

while(right<s.length)
{
if(s[right]===checker[left])
{
    stk.push(s[right])
    right++
    left++
}else if(s[right]!==checker[left]){
right++
}
if(stk.length===checker.length)
{
     break
}

}

if(stk.length===checker.length)
{
     return "YES"
}else {
    return "NO"
}



