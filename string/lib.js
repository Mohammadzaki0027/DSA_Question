let d1=2
let m1= 7
let y1= 1014

let d2=1
let m2= 1 
let y2=1014
function lib(m1,m2,d1,d2,y1,y2)
{
    if(y2!==y1)
{
    return 10000
}else if(m2===m1) {
    let dif=d1-d2
    return dif*15
}else if(m1!==m2)
{
    let dif=m1-m2
    return dif*500
}
}
console.log(lib(m1,m2,d1,d2,y1,y2))