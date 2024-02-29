p=[10,11,12,20,30]
q=[11,20,25,30,33]


 count=0
isFound=false
for(n of p){
    count++
    /*console.log(n)*/
    for(m of q){
        /*console.log(m)*/
        if(n==m){
            isFound=true
            console.log(n)
        }
    }
}
!isFound && console.log('NO DUPLICATE NUMBERS')
console.log(count)