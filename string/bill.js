let K= 1
let bill=[3 ,10 ,2 ,9]
let b=7

let sum=bill.reduce((a,b)=>{
 return a+=b
},0)

let amountcharge=sum/2
let ammaamount=sum-bill[K]
let remain=ammaamount/2
let final=(b-remain)
if(final==0) return "Bon Appetit"
return final

