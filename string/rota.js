// 3 
let k=2 
// 3
let arr=[1 ,2 ,3]
[0,1,2]
for(let i=arr.length-1;i>=arr.length-k;i--)
{
let y=arr.pop()
arr.unshift(y)
}

for(let i=0;i<queries.length;i++)
{
    console.log(arr[queries[i]])
}