//logic : 10 %5 %3 = 0 thrn true  else false;

let sum = 0;
let i = 0;
let num =2;
for ( i = 0; i < num; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
        sum += i;
       
    }
    console.log(sum);
}

