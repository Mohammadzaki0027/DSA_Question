let arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
let brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14];
arr.sort((a, b) => {
  return a - b;
});
brr.sort((a, b) => {
  return a - b;
});
for(let i=0;i<brr.length;i++)
{
    let flag=true
    for(let j=0;j<arr.length;j++)
    {
        if(brr[i]===arr[j])
        {
            arr.splice(j,1)
            flag=false
            break
        }
    }
    if(flag==true)
    {
        
        console.log(brr[i])
    }
}