// 1 2 3
// 1 3 2

let x=1
let y=3
let z=2

function position(A,B,C)
{
let dist1=Math.abs(x-z)
let dist2=Math.abs(y-z)

if(dist1===dist2)
{
    return 'Mouse C'
}else if(dist1>dist2){
    return "Cat B"
}else{
    return "Cat A"
}
}


console.log( position(x,y,z));