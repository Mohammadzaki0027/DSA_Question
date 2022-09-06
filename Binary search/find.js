function find(nums, target) {
    let l=0
    let r=nums.length-1
    let ans=-1
    while(l<=r)
        {
            let mid=(l+(Math.floor((r-l)/2)))
    
            if(nums[mid]==target){
                ans=mid
                return ans
            }else if(nums[mid]>target){
                r=mid-1
                ans=mid
            }else{
                l=mid+1
            }
        }
    return ans==-1?nums.length:ans
};
let nums=[1,3,5,6]

let y=find(nums, target=2)
console.log(y);