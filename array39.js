let fruits = ['Apple','Orange','Kiwi','pineapple']
console.log(fruits)

for(i=0;i<=fruits.length-1;i++){//0<=3//1<=3//2<=3//3<=3//4<=3
    console.log(fruits[i])//apple//orange//kiwi//pineapple

}

let vegetable =['tomato','carrot','potato','spinach','pumpkin']
console.log(vegetable)
for(i=0;i<=vegetable.length-1;i++){
    console.log(vegetable[i])
}
console.log('......forin...........')
////for in method (easable)

for(let y in fruits){
    console.log(fruits[y])
}
for(let y in fruits){
    console.log(y)
}
console.log('..............forof...................')

for(let z of fruits){
    console.log(z)
}