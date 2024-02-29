//$  $  $  $  $

//   $     $

//      $

//   $     $

//$  $  $  $   $
for(row=1;row<=5;row++){
    str= ""
    for(col=1;col<=5;col++){
        if(col==row || row==5 || row==1 ||col+row==6){
            str= str+" $"
        }
        else{
            str=str+"  "
        }
        
    }
    console.log(str)
}