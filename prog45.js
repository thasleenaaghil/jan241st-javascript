//w.a.p to print the numbers from the given array whose sum is 6


const arr = [2,3,4,5]
sum=6
isFound=false
count=0
for(i=0;i<=arr.length-1;i++){
    for(j=i+1;j<=arr.length-1;j++){
        count++
        if((arr[i]+arr[j])==sum){
            isFound=true
            console.log(`(${arr[i]},${arr[j]})`)
    }
}
}
!isFound && console.log('no such pair')
console.log(count)