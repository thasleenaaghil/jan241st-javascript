//w.a.p to print the following output for the given input
//input = 2//3//4
//output = 24//369//4936
num=3
i=1
p=0
while(i<=num)
{
    p=p*10+(num*i)
    i++
}
console.log(p)
//pattern = 2*12  3*123 4*1234 5*12345
num = 5
i =1
str = ''
while(i<=num){
    str=str+i
    i++
}
console.log(str*num);
//pattern = 2+22 3+33+333 4+44+444+4444
n = 4
j=1
s=''
sum=0
while(j<=n){
    s=s+n
    sum= sum+Number(s)
    j++
}
console.log(sum)