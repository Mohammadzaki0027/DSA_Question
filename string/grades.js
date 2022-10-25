let grades=[37,38]
let stk=[]

for(let i=0;i<grades.length;i++)
{
    
    if(grades[i]<38)
    {
   
        stk.push(grades[i])
        continue
    }
    if(grades[i]%5!==0)
    {
    
        let remain=grades[i]%5

    q=5-remain

        if(q<3)
        {
            stk.push(grades[i]+q)
        }
        else{
            stk.push(grades[i])
        }
    }else{
        stk.push(grades[i])
    }
}
 console.log(stk);