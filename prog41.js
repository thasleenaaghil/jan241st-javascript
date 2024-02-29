let arr =[10,23,11,2,5,3]
//w.a.p to check whether 2 is present in the array

searchitem=25
ispresent=false
for(let num of arr){
    if(searchitem==num){
        ispresent=true
    }

}
console.log(ispresent? '2 is present':'2 is not present')

