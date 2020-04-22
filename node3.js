//2 = 2*1 + 2*2 + 2*3 + 2*4 + 2*5 + 2*6 + 2*7 + 2*8 + 2*9 + 2*10;
  //   1 2 3 4 5 6 7 8 9 10     

let num = 55;
let loop = 1;
let sum = 0;


while(loop<=num){

let loop2 = 1;
let mul = 0;

while(loop2<11){
     
        mul =loop*loop2;
        sum = sum + mul;
        loop2 = loop2+1;  
        
    }

 loop = loop+1;
}

console.log(sum);
