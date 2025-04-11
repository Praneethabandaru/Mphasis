function hi(a:number)
{
console.log("you have entered "+ a);
}
// hi(100);
// function details()
// {
//     let id:number=10;
//     let name:string="praneetha";
//     let age:number=23;
//     let isBoolean:boolean=true;
//         console.log("Indian");
// } 
// details();

// function add(a:number,b:number):string
// {
//     let res:number = a+b;
//     return `the sum is ${res}`
// }
// let str=add(10,20)
// console.log(str);

function custdetails():[number,string,boolean]
{
    let custid:number=100
    let custname:string='arjun'
    let isindian:boolean=false;
    return [custid,custname,isindian]
}
let res1=custdetails()
console.log(res1);

var [a,b,c]=custdetails();
console.log(b);

//write a function which returns array of numbers
// function numbers()
// {   
//     let arr:number[] =[1,2,3,4,5];
//     return arr;
// }
// let x = numbers();
// console.log(x);

function myarray():number[]
{
    let arr=[10,23,233,12];
    return arr;
}

let res=myarray();
res.forEach(e =>{

});
                                                      
function summary()
{
    let a : number //semi colon is optional
    let b:string; //for only string semi colon is mandatory
    let c : number | string //it can take number or string but not boolean
    let d:any // can store number,string,objects etc
    // let e:num[] //arrays
    let f:boolean
}