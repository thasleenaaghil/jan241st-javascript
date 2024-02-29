a=[10,5,2,13,58,1]
//w.a.p to find the even no in given array

even = a.filter(num=>num%2==0)
console.log(even)

//w.a.p to fid all numbers greater than 10
greater=a.filter(num1=>num1>10)
console.log(greater)

//is there any number greater than 10
console.log('.......some..........')

x=a.some(num=>num>10)
console.log(x?'yes':'no')

console.log('.......find..........')
y=a.find(num=>num>10)
console.log(y)