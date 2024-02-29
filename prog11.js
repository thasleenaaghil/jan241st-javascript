// w.a.p to display FIZZ when the number is divisible by 3 and BUZZ if the number is divisible by 5 and FIZZBUZ when the number is divisible by 15
num1 = 7
if(num1%15 == 0){
    console.log('FIZZBuzz')
}
else if(num1%5 == 0){
    console.log('BUZZ')
}
else if(num1%3 == 0){
    console.log('FIZZ')
}
else{
    console.log('not divisible by any of these numbers')
}