// 1700 to 1917,
// 1919 start gerogian calendar


// first julian calendar leaf year is like it is divisible by 4


// 1919 after Divisible by 400.
// Divisible by 4 and not divisible by 100.

function calendaer(year){
if(year>=1700&&year<1917)
{
    if(year%4!==0)
    {
        return `13.09.${year}`
    }else{
        return `12.09.${year}`
    }
}else{
    if(year%4!==0)
    {
       return `13.09.${year}`
    }else if(year%100!==0)
    {
        return `12.09.${year}`
    }else if(year%400!==0)
    {
        return `13.09.${year}`
    }else {
        return `12.09.${year}`
    }
}
}


console.log(calendaer(1700)); 