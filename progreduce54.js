a=[10,5,2,13,58,1]
//w.a.p to find the highest number
highest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(highest)

//w.a.p to find the smallest number
lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(lowest)

//w.a.p to find the sum of array
n=a.reduce((num1,num2)=>num1+num2)
console.log(n)