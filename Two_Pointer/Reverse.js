let arr=[1,2,5,6,4,8,6,48,6,5,654,6]
function reversearray(arr){
   let r=arr.length-1
   let l=0
   while(l<r)
   {
    swap(l,r,arr)
    l++
    r--
   }
   return arr
}
let y=reversearray(arr)
console.log(y);

function swap(l,r,arr){
    let temp=arr[l]
    arr[l]=arr[r]
    arr[r]=temp
}