//write a program to check a given person is elogible to vote.
//age >=18
age = 18
if(age>=18){
        console.log('eligble to vote');
}
else{
    console.log('not eligble to vote');
}
//write a program to check whether the number is positive or negative
x = 0
if(x>0){
    console.log('its a positive number');
}
else if (x==0){
    console.log('neither positive nor negative')
}
else{
    console.log('its a negative number');
}
// w.a .p to find the largest number among given two numbers
num1 = 30
num2 = 10
if(num1>num2){
    console.log(`${num1} is larger`)
}
else if (num1==num2){
    console.log(`both are equal`)
}
else{
    console.log(`${num2} is large`)
}
// w.a.p to find the second largest number from the given three  numbers and sort the given three numbers in descending
num1 = 100
num2 = 200
num3 = 300
if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is ${num2}`)
        console.log(`descending order is ${num1},${num2},${num3}`)
    }
    else{
        console.log(`second largest number is ${num3}`)
        console.log(`descending order is ${num1},${num3},${num2}`)
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`second largest number is ${num1}`)
        console.log(`descending order is ${num2},${num1},${num3}`)
    }
    else{
        console.log(`second largest number is ${num3}`)
        console.log(`descending order is ${num2},${num3},${num1}`)
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`second largest number is ${num1}`)
        console.log(`descending order is ${num3},${num1},${num2}`)
    }
    else{
        console.log(`second largest number is ${num2}`)
        console.log(`descending order is ${num3},${num2},${num1}`)
    }
    
}
else{
    console.log('all numbers are equal')
}
console.log('...........................')
/*ternary operators*/
console.log(age>=18? 'person eligible to vote' : 'not eligible to vote')
x>0?  console.log('its a positive number'):x<0? console.log('its a positive number'):console.log('neither positive nor negative')