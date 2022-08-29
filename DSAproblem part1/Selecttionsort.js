function sort(N,arr){
    for(var i=0;i<arr.length;i++)
    {
        var min=i
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j;
            }
        }
        swap(arr,min,i)
    }
    console.log(arr.join(" "))
}
sort(arr=[5,2,45,8,-3,-9])
function swap(arr,i,j)
{
temp=arr[i]
arr[i]=arr[j]
arr[j]=temp
}