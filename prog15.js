// w.a.p to display a given number in reverse order i/p =123 o/p =321
num = 123
str = ''
while(num>0){//123>0//12>0//1>0//0>0
    ld = num%10//123%10 = 3//12%10=2 1%10=1
    str = str+ld//''+3=3//3+2=32//32+1=321
    num = Math.floor(num/10)//123/10=12.3=12//
}
console.log(str)



