//program to find gcd/h.c.f of given two numbers
//12 - 1 2 3 4 6 12
//28 - 1 2 4 7 14 28
//cf-1 2 4
//hcf = 4
num1=12
num2=28
gcd=0
for(i=1;i<=num1 && i<=num2; i++){
    if(num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd)