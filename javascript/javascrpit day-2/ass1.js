function Student(name,age,course)
{
    this.studentName=name;
    this.studentAge=age;
    this.studentCourse=course;
    this.display=function(){
       return `<tr>
       <td>${this.studentName}</td> 
       <td> ${this.studentAge} </td>
       <td> ${this.studentCourse}</td>
       </tr> `;
    };  
}

function addstudent()
{
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const course=document.getElementById("course").value;

    if(name === "" || age === "" || course === ""){
        alert("please fill in all thefields");
        return ;
    }

    const newStudent = new Student(name,age,course);

    document.getElementById("studentTable").innerHTML += newStudent.display();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("course").value="";
}