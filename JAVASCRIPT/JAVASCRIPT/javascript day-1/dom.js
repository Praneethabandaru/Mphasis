function demo1(){
    //propoerties of document class
    document.bgColor='yellow';
    document.fgColor='green';
    document.title="Dom Demo";
} 
function demo2(){
    //how to access specific html element
    // var a = document.getElementById("p2").innerText;
    // alert(a);
    //how to change the content of p2 tag
    // document.getElementById("p2").innerText = "Chennai Super Kings"; 
    //if we want Chennai Super Kings  in bold then 
    document.getElementById("p2").innerHTML = "<b>Chennai Super Kings</b>";
}
function demo3(){ 
   var res = document.getElementsByTagName("p");

   for(var i=0;i<res.length;i++)
    {
        alert(res[i].innerText);
    }
}
function demo4(){
    //print all tags having class c1
    var res = document.getElementsByClassName("c1");

    for(var i=0;i<res.length;i++)
        {
            alert(res[i].innerText);
        }
}
function demo5(){
    var res = document.querySelector("#d1 p");
    alert(res.innerText);
}
function demo6(){
    var res = document.querySelectorAll("#d1 p");
    for(var i=0;i<res.length;i++)
        {
            alert(res[i].innerText);
        }
} 
function demo7(){
    var res = document.querySelectorAll("#d1 .c1");
    for(var i=0;i<res.length;i++)
        {
            alert(res[i].innerText);
        }
}
function demo8(){
    // create element works
    // step-1 write a code to create element  <p>hello world</p>
    var a= document.createElement("p")// stores in memory
    // step-2
    var b= document.createTextNode("hello world");// creates text
    // step-3 
    a.append(b);// <p>hello world</p>
    // step-4
    var c =  document.getElementById("d1")
    c.append(a);
}
function demo9(){
    // create removelement works?
    var c =  document.getElementById("d1")
    //c.removeChild(c.lastChild)
    c.removeChild(c.lastElementChild)
    //c.removeChild(c.firstChild)
    // c.removeChild(c.childNodes[1])
} 
function demo10(){
    //create attributes works?
    var a = document.getElementById("d1");
    a.setAttribute('class','xyz');
}
function demo11(){
    // removing attributes works?

    var a = document.getElementById("d1");
    a.removeAttribute('class')
}
function demo12()
{  
    // create hide works?
    var a = document.getElementById("d1");
    a.hidden=true;
    
}

function demo13()
{
    // create hide works?
    var a = document.getElementById("d1");0
    a.hidden=false    
} 
function demo14(){
    var a = document.getElementById("d1");
    a.style.backgroundColor='blue';
    a.style.color='yellow';
    a.style.width='500px'
}
function demo15()
{ 
    // create hide works?
    var a = document.getElementById("im1");
    a.src="https://www.pngkey.com/png/full/722-7222312_bitmoji.png"
}
let imgIndex=0;
let imgList = [ "https://www.pngkey.com/png/full/722-7222312_bitmoji.png" ,
    "https://i.pinimg.com/474x/e3/0e/10/e30e10cc5c65b8825e2e251c528d296e.jpg", 
    "https://tse3.mm.bing.net/th/id/OIP.nuhUCUtN3j7g5n33Iy6CFgHaJs?rs=1&pid=ImgDetMain"
]
function demo16()
{
    let img=document.getElementById("im1");
    img.src=imgList[imgIndex];
    imgIndex = (imgIndex + 1)%imgList.length;
}