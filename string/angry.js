
let k=3
let a=[-1 ,-3 ,4 ,2]

let level=0
let count=0
for(let i=0;i<a.length;i++)
{
if(level<=arr[i])
{
    count++
}
}
if(count>k) return "NO"

else return "YES"