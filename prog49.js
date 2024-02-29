p=[10,11,12,20,30]
q=[11,20,25,30,33]
isFound=false
i=0
j=0
count=0

while(i<=p.length-1 && j<=q.length-1){
    count++
    if(p[i]==q[j]){
        console.log(p[i])
        isFound=true
        i++
        j++
    }
    else if(p[i]<q[j]){
        i++
    }
    else{
        j++
    }
}
!isFound && console.log(`no common numbers`)
console.log(count)