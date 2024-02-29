const arr = [11,10,2,4,3,12]



//Algorithm
searchkey=11
low=0
up=arr.length-1
ispresent=false
//1)sort the given array
arr.sort((a,b)=>a-b)
//2)find the mid=low+up/2
while(low<=up){
    mid=Math.floor(low+up)/2
//3)mid==searchitem - found
  if(arr[mid]==searchkey){
    ispresent=true
    break;
  }
//4)mid>searchitem
    //up=mid-1
    else if(arr[mid]>searchkey){
  up=mid-1
    }
//5)Mid<searchitem
  //low=mid+1
  else{
    low=mid+1
  }
}
//6)repeat till low=up

  console.log(ispresent? `${searchkey} found`:`not found`)