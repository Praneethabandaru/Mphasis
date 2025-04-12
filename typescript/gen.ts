//  function swap (a:number,b:number)
//  {
//     let c=a;
//     a=b;
//     b=c;
//     console.log(a);
//     console.log(b);
//  }
//  swap(10,20); 

 function swap <T>(a:T,b:T)
 {
    let c=a;
    a=b;
    b=c;
    console.log(a);
    console.log(b);
 }
 swap(10,20);
 swap("hello","world"); 