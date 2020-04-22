
let num =5;
let loop = 1;
let mul=1;

if(num%2==0){
for(loop=1;loop <= num; loop++){
    
    mul = mul * loop;
}
console.log(mul);
}else{
    console.log("It is not a positive number :");
}