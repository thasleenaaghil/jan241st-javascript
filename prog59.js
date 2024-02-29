//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('......product name.........................')
products.forEach(name1=>{console.log(name1[1])})

//2. display product whose price < Rs.50
console.log('......price < Rs.50..............')
products.filter(cost=>cost[2]<50).forEach(element=>console.log(element[1]))

//3. print price of oreo
console.log('..............price of oreo......................')
oreo=products.find(item=>item[1]=='oreo')
console.log(oreo[2])
//4. print costly product name
cost=(products.reduce((cost1,cost2)=>cost1[2]>cost2[2]?cost1:cost2)
)
console.log(cost[1])
//5. display out of stock product
products.filter(out=>out[3]==0).forEach(element=>console.log(element[1]))

//6. sort products based on stock in decsending order
products.sort((a,b)=>b[3]-a[3]).forEach(element=>console.log(element))

//7. print product having maximum available stock
max=products.reduce((a,b)=>a[3]>b[3]?b:a)
console.log(max[1])
//8. is there any product can be purchased by Rs. 10
price=products.some((pr1,pr2)=>pr1[2]<=10)
console.log(price)
//9. Is there any product in the range of 10 to 30
products=products.some(item=>item[2]>10 && item[2]<=30)
console.log(products?'yes':'no')
//10. print all products in the range of 10 to 30
products.filter(item=>item[2]>10 && item[2]<=30).forEach(pro=>console.log(pro[1]))
