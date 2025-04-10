function demo1(){
    //how to create array using array class
    // var ob = new Array("india","canada","usa") //1st way to create an array
    var ob =["india","canada","usa"] //2nd way to create an array
    var r = document.getElementById("d1");
    // for-each loop 1. dont require indexes 2.only used to read all values
    ob.forEach(e => {
        // alert(e)
        r.innerHTML += e +"<br>"
    });
}
function demo2(){
    //sort,push,pop,reverse,indexOf,some --->ARRAY METHODS
    var ob=[10,9,50,34,56,67];
    var r = document.getElementById("d1");
    var sorteddata=ob.sort(function(a,b){return a-b});//sorts the data in ascending order
                                       //{return b-a} sorts the data in descending order
    sorteddata.reverse();//reverses the data
    sorteddata.forEach(e => {
        // alert(e)
        r.innerHTML += e +"<br>"
    });
}
function demo3(){
    //how push and pop works
    var ob=["india","canada","usa"];
    var r = document.getElementById("d1");
    //push is a way to add new element to the array
    ob.push("japan");
    ob.push("swiz");
    ob.forEach(e => { 
        r.innerHTML += e +"<br>"
    });
}
function demo4(){ 
    //how push and pop works
    var ob=["india","canada","usa"];
    var r = document.getElementById("d1");
    //push is a way to add new element to the array
    alert(ob.pop()); //it displays the element and removes too in the alert box it shows which elements are being removed
    alert(ob.pop()); 
    ob.forEach(e => { 
        r.innerHTML += e +"<br>"
    });
} 
function demo5(){
    var r = document.getElementById("d1");
    var ob = [10,9,50,34,56,67,15];

    // var res = ob.filter(function(num){
    //     return num %2==0
    // });
    // var res=ob.filter(myfunc()) 

    //========================
    var res=ob.filter(function(num){
        return num>12 && num<16;
    });

    res.forEach(e => {
        // alert(e)
        r.innerHTML += e +"<br>"
    });

    // function myfunc(num)
    // {
    //     return num%2==0;
    // } 
}
function demo6()
{
    //output :5 10 15 20 25 30 
    //1 4 9 16 25 36 
    //map method--use map method,if you want to perform some operation for every number
    var r = document.getElementById("d1");
    var ob = [1,2,3,4,5];
    
    var res=ob.map(function(nums){
        return nums*5;
    });

    res.forEach(e => { 
        r.innerHTML += e +"<br>"
    });
}
function demo7()
{
    //reduce function
    var r = document.getElementById("d1");
    var ob = [10,20,30,40,50]; 
    var res=ob.reduce(function(sum,nums){ 
        sum=sum+nums;
        return sum;
    });
    r.innerText=res;

    // sum=0; //here sum is called accumalator
    // // e is called current value
    // res.forEach(e => { 
    //     // r.innerHTML += e +"<br>" 
    //     sum = sum+e;
    // }); 
}
function demo8()
{
    //slice
    //print 1,2,3
    var r = document.getElementById("d1");
    var ob = [1,2,3,4,5]; 

    var res=ob.slice(0,3);

    res.forEach(e => {
        r.innerHTML += e +"<br>" 
    });
}
function demo9()
{
    //splice(remove + add)
    var r = document.getElementById("d1");
    var ob = [1,2,3,4,5,6]; 
    //starts from 0 index splice(0,3) means removes 3 elements i.e.,1,2,3 and then inserting 100,200 in that position
   ob.splice(0,3,100,200);

    ob.forEach(e => {
        r.innerHTML += e +"<br>" 
    });
}
function demo10()
{
    var r = document.getElementById("d1");
    var a1=[1,2,3,4,5,6];
    var a2=[7,8,9,10];
    //combine both array dispaly all                               
    //var res=a1.concat(a2);
    
    //spread operator (symbol: ...)
    var res=[...a1,...a2];
    res.forEach(e => {
        r.innerHTML += e +"<br>" 
    });
}
function demo11()
{
    //addnums(10,20);
    var res = addnums(10,20,30,40,50);
    alert(res);
}
function addnums(...numbers)
{
    var res = numbers.reduce(function(sum,nums)
    {
        return sum = sum + nums;
    });
    return res;
}