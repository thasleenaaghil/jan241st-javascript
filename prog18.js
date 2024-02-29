//w.a.p to check whether the given three number is armstrong or not
//153=1**3+5**3+3**3=1+125+27=153
num = 153
temp=num
sum = 0
while(num>0){
    ld=num%10
    sum=sum+ld**3
    num=Math.floor(num/10)
}
console.log(temp==sum? 'armstrong':'not armstrong');