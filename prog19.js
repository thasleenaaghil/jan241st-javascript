//w.a.p to display the numbers whose exponential is in the range of 8-36
// - here the user can input the exponential value(power)
//power =2
//1=1 2=4 3=9 4=16 5=25 6=36 7=49 //3 4 5 6
//power=3
//1=1 2=8 3=27 4=64 5=125 //  2 3
power = 2
num = 1
low=8
up=36
while(num<=36){
  if(low<=num**power && num**power<=up){
    console.log(num)
  }
  num++
}
