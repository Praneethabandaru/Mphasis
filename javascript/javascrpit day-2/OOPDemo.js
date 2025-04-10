function demo1()
{
    //how to work with object

    var ob = new Object(); //creating object

    //logic to create properties
    ob.studentid=100;
    ob.studentname="raj";
    ob.class=10;

    //how to print the values
    var res=document.getElementById("d1");
    res.innerText = ob.studentid + ":"  +ob.studentname ;
}
function demo2()
{
    //how to work with object

    var ob = {} ;//creating object

    //logic to create properties
    ob.studentid=100;
    ob.studentname="raj";
    ob.class=10;

    //how to print the values
    var res=document.getElementById("d1");
    res.innerText = ob.studentid + ":"  +ob.studentname ;
} 
function demo3()
{
    let ob = {
        //properties
        studentid :100,
        studentname:'raj',
        class:12,
        //methods
        // show:DisplayAll
        DisplayAll:function()
        {
            return `${ob.studentid} ${ob.studentname} ${ob.class}` 
        }
    } 

    // function DisplayAll()
    // {
    //     return ob.studentid +":" +ob.studentname+":"+ob.class;

    // }
    var res=document.getElementById("d1");
    res.innerText = ob.DisplayAll() ;
} 
function empobject()
{
    let ob = {
        //properties
        empid :100,
        empfirstname:'raj',
        emplastname:'shekar',
        empsalary:12000,
        //methods
        // show:DisplayAll
        // DisplayAll:function()
        // {
        //     return `${ob.empid} ${ob.empfirstname} ${ob.emplastname} ${ob.empsalary}  ` 
        // }
        // DisplayFullName:function()
        // {
        //     return `${ob.empfirstname} ${ob.emplastname}`
        // } 
        DisplayAnnualSal:function()
        {
            return `${ob.empsalary*12} `
        }
    } 
    var res=document.getElementById("d1");
    // res.innerText = ob.DisplayAll() ; 
    // res.innerText = ob.DisplayFullName() ; 
    res.innerText = ob.DisplayAnnualSal() ; 
}
function Student(sid,sname,totalmarks)
{
    //properties
    this.studentId=sid;
    this.studentName=sname;
    this.totalMarks=totalmarks;
    
    this.display=function(){
       return `${this.studentId} ${this.studentName} ${this.totalMarks}`
    };
}
function demo5()
{
    let ob1 = new Student(100,'jay',34);
    let ob2 = new Student(100,'vijay',34);
    Object.freeze(ob1);//object is blocked for modification
    ob1.studentName="JEFF";//changing the name of student by re-assigning it 
    //how to create the duplicate object 
    var newobject=Object.assign(ob1);

    var res = document.getElementById("d1");
    res.innerHTML= ob1.display();
    res.innerHTML+="<br>"
    res.innerHTML +=ob2.display();
    res.innerHTML+="<br>"
    res.innerHTML+=newobject.display();
}
