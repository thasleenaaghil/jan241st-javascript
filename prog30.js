//
// 
//     *
//   *    *
// *        *
//* * * * * * *
for(row=1;row<=4;row++){
    str= ""
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str= str+" *"
        }
        else{
            str=str+"  "
        }
        
    }
    console.log(str)
}
console.log('.........................')
//* * * * *
//*       *
//*       *
//*       *
//*       *
//*       *
//*       *
//* * * * *
for(row=1;row<=8;row++){
    str= ""
    for(col=1;col<=5;col++){
        if(col==1 || row==8 || row==1 ||col==5){
            str= str+" *"
        }
        else{
            str=str+"  "
        }
        
    }
    console.log(str)
}
//1
//0 1
//1 0 1
//0 1 0 1
for(row=1;row<=4;row++){
    str= ""
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
            str= str+'1'
        }
        else{
            str=str+'0'
        }
        
    }
    console.log(str)
}

