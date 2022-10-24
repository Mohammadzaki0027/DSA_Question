ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

ar.sort((a,b)=>{
return a-b
})

  let stk=[]
for(let i=0;i<ar.length;i++)
{
 if(ar[i]===ar[i+1])
 {
    stk.push(ar[i])
    i=i+1
 }

}
return stk.length