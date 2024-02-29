
low=8
high=500

for(i=8;i<=500;i++){
    sum=0
    temp=i
    while(temp>0){
        let remainder = temp%10;
        sum=sum+remainder**3;
        temp =parseInt(temp/10);
    }
    if(sum==i)
    console.log(i)
}
