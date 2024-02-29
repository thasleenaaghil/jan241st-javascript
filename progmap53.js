//w.a.p to create a new array with numbers<=13 the increment the number and number>13 the decrement the number
//op=[11,12,13,14,13,14]
a=[10,11,12,13,14,15]

op=a.map((num)=>num<=13?num+1:num-1)
console.log(op)