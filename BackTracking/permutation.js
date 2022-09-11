let arr=[1,2,3]
function gp(arr,index)
{
    if(index===arr.length)
    {
        console.log(arr.join(" "));
        return
    }
    for(let i=index;i<arr.length;i++)
    {
        swap(arr,i,index)
        gp(arr,index+1)
        swap(arr,i,index)
    }
}