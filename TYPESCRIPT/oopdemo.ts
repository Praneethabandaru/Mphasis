// class myclass
// {
//     constructor(){
//         console.log("constructor called");
//     }
//     public hello()
//     {
//         console.log("hello function call");
//     }
// }
// class myclass2 extends myclass //inhertiance
// {

// }
// // let ob1=new myclass2();
// // ob1.hello();

// let ob=new myclass();
// ob.hello(); 
//if you dont want to create an object to myclass ---. use abstarct keyword


// abstract class myclass
// {
//     constructor(){
//         console.log("constructor called");
//     }
//     public hello()
//     {
//         console.log("hello function call");
//     }
// }
// class myclass2 extends myclass //inhertiance
// {

// }
// let ob=new myclass(); //showung an error bcz i am using  abstract keyword for myclass so i cant create an object
// ob.hello();

abstract class myclass implements Imyinterface
{
    a:string;
    b:number
    add():number{
        return 100;
    }
} 
//for interface abstr act keyword is not mandatory
interface Imyinterface
{
    a:string;
    b:number;
    add():number
}