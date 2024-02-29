const arr = [2,3,4,5]
pairsum=6
low=0
up=arr.length-1
ispresent=false
count=0

while(low<up){
    cursum= arr[low]+arr[up]
    count=count+1

    if(cursum==pairsum){
        ispresent=true
        console.log(`(${arr[low]},${arr[up]})`)
        low++
        up--
    }
    else if(cursum>pairsum){
      up--
    }
    else{
        low++
    }
}
!ispresent && console.log(`no such pair`)
console.log(count);