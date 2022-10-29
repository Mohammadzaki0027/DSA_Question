let length=5 
let K=4
let height=[2 ,5 ,4 ,5 ,2]
function tall(height,K)
{
let max=Math.max(...height)
if(K>max) return 0

else {
    let diff=max-K
    return diff
}
}

console.log( tall(height,K))