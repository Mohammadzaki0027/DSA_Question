let s="aaabccddd"


const removetwosames=(s)=>{
    s=s.split("")
    s.sort(function(a,b){
        return a-b
    })
    let stk=[]
for(let i=0;i<s.length;i++)
{
    if(s[i]!==stk[stk.length-1])
    {
        stk.push(s[i])
    }else{
      stk.pop()
    }
}
if(stk.length>0) return stk.join("")
return "Empty String"
}


console.log(removetwosames(s)); 