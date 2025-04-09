// function add() // logic to create a function
//     {
//         let a=100;
//         let b=200;
//         let c=a+b;
//         //document.writeln(c);
//         prompt(c);
//     }
// function addusingprompt()
// {
//     let a=prompt("enter the 1st number");
//     let b=prompt("enter the 2nd number");
//     let c= parseInt(a)+parseInt(b);
//     alert(c)
// }
// //parseInt converts string to integer
// //parseFloat converts string to float

// function changecolor()
// {
//    if(confirm("do you want to change bg-color?")==1)
//    {
//     document.bgColor="red";
//    }
//    else 
//         document.writeln("you have cancelled the colour");
// } 
// function readtxtval()
// {
//     //how to access the value from textbox
//     // alert(t1.value);
//     // alert(document.getElementById(t1).value)
//     //writing value
//     document.getElementById("t1").value="India"
// } 

// function copytext(){ 
//     t2.value = document.getElementById("t1").value;
// }
// function number()
// {
//     let name=prompt("enter ur name");
//     let number=parseInt(prompt("enter the number"));
//     res="";
//     for(let i=0;i<number;i++){
//         res=document.writeln(name);
//     } 
//     alert(res);
// }
// function credentials()
// {
//     if(document.getElementById("t3").value == "admin" && document.getElementById("t4").value == "india") 
//     {
//         alert("Login successful");
//     }
//     else
//     {
//         alert("check once")
//     }
//     window.location="home.html";
// }
function registrationpage() 
{
    let username = document.getElementById("t1").value ; 
    let password = document.getElementById("t2").value ; 
    let confirmpassword = document.getElementById("t3").value ; 
    let phone = document.getElementById("t4").value ; 
    
    if(username == " " || password == " " ){
        alert("username and password cannot be blank");
        return ;
    } 
    if(password != confirmpassword){
        alert("password and confirmpassword doesnot match"); 
        return ;
    }
    if(phone.length !==10) 
    {
        alert("phone no is not valid");
        return ;
    } 

    let userdetails= "username:" + username + "\n" +  "password:" + password + "\n" +  "confirmpassword:" + confirmpassword+ "\n" +  "phone:" + phone;

    alert("registration successful\n\n" + userdetails);

}