let expense = [12000,23000,40000,34000,55000,22000,10000]

//find lowest expense


lowest = expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);
//find highest expense
highest=expense[0]
for(let exp of expense){
    if(exp>=highest){
        highest=exp
    }
}
console.log(highest)

//find total expense
sum=0
for(let total of expense){
    sum=sum+total
}
console.log(sum)

