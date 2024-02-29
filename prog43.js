//w.a.p to print duplicate element from the given array
//  0  1   2   3  4  5  6  7  8
a=[10,200,300,20,30,40,50,60,100]//10,20,30
 
ispresent=false
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=a.length-1;j++){
        if(a[i]==a[j]){
            ispresent=true
            console.log(a[i]);
        }
    }
}
/* truthy operator*/
!ispresent && console.log('not present')