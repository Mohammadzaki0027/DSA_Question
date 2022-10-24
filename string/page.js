let N=70809
let p=46090

let doublepage=N-1
let fronturn=0
fronturn=Math.floor(p/2)
let backturn=0
if(N%2!=0)
{
backturn=N-1-p
backturn =Math.ceil(backturn/2)
}else{
    backturn=N-p
    backturn =Math.ceil( backturn/2)
    
}

let min=Math.min(backturn,fronturn)

console.log(min);