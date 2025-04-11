function hi(a) {
    console.log("you have entered " + a);
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
function custdetails() {
    var custid = 100;
    var custname = 'arjun';
    var isindian = false;
    return [custid, custname, isindian];
}
var res1 = custdetails();
console.log(res1);
var _a = custdetails(), a = _a[0], b = _a[1], c = _a[2];
console.log(b);
//write a function which returns array of numbers
// function numbers()
// {   
//     let arr:number[] =[1,2,3,4,5];
//     return arr;
// }
// let x = numbers();
// console.log(x);
function myarray() {
    var arr = [10, 23, 233, 12];
    return arr;
}
var res = myarray();
res.forEach(function (e) {
});
function summary() {
    var a; //semi colon is optional
    var b; //for only string semi colon is mandatory
    var c; //it can take number or string but not boolean
    var d; // can store number,string,objects etc
    // let e:num[] //arrays
    var f;
}
