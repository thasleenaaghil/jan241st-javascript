//w.a.p to find the square of each items in the given array array
a =[10,11,12,13,14,15]

for(num of a){
    console.log(num**2)
}

console.log('...................')

a.forEach(item => {
    console.log(item**2)
});

console.log('.......................')

sq=a.map((item1)=>item1**2)
console.log(sq)

//w.a.p to find the cube of each items in an array
console.log('............................')
a.forEach(item=>{
    console.log(item**3)
})

console.log('..............................')
cube=a.map((item1)=>item1**3)
console.log(cube)