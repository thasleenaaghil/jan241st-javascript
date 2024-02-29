//w.a.p to print all prime numbers b/w 2-50

for(i=2;i<=50;i++){
    count=0
    for(j=2;j<i;j++){
        if(i%j==0){
            count=count+1
            break
        }
    }
    if(count==0){
        console.log(i)
    }
}
//program to display all armstrong number b/w 8 to 500
//program to find gcd/h.c.f of given two numbers
//12 - 1 2 3 4 6 12
//28 - 1 2 4 7 14 28
//cf-1 2 4
//hcf = 4


