import { Component } from '@angular/core';
import { from, fromEvent, interval, Observable } from 'rxjs';
import { StudentsDetService,Istudents } from '../students-det.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rxdemo',
  standalone: false,
  templateUrl: './rxdemo.component.html',
  styleUrl: './rxdemo.component.css'
})
export class RxdemoComponent {
    fd:any;
    stuarray:Istudents[]=[] 
    studentdata!:Istudents;
    error:string='' 
    constructor(public ob:StudentsDetService){}
    displaystudent()
    { 
        //result will have all the students data 
        this.ob.readstudents().subscribe(result => console.log(result))
        this.ob.readstudents().subscribe(result => this.stuarray=result)
    }
    displaystudentbyid(id:any)
    {
        alert(id)
        this.ob.readstudentbyid(id).subscribe(c=> this.studentdata= c)
    }
    Addnewstudents()
    {
        var res= {
          "id":"4",
          "studentname":"Rahul",
          "totalmarks":"900"
        }
        this.ob.Addstudents(res).subscribe(c =>{
          alert("data added succesfully!!")
        })
    }
    AddStudent()
    {
      const id = (document.getElementById('studentId') as HTMLInputElement).value;
      const studentname = (document.getElementById('studentName') as HTMLInputElement).value;
      const totalmarks = (document.getElementById('totalMarks') as HTMLInputElement).value;
      const res = {
        id: id,
        studentname: studentname,
        totalmarks: totalmarks
      };
      this.ob.Addstudentsdynamically(res).subscribe(d=>{
        alert("data addded successfully")
      })
    }
    deletestudents(id:any)
    {
        this.ob.DeleteStudents(id).subscribe (c =>{
          alert("data deleted succesfully!!")
        })
    }
    updatestudents(id: any, data: any) { 
      console.log("updating student id:" , +id);
      console.log("Data being sent:" , data);
      this.ob.updatestudents(id,data).subscribe(() =>
      alert("data updated sucessfully!"))
    }
    fromdemo()
    {
      //logic to expose the data 
      // from returns observable type
      let country=from(["india","us","uk"])
       //how to display the data for user?
      country.subscribe(item =>{
        //console.log("the item is " +item)
        setInterval(()=>{
          this.fd=item;
        })
      })
    }
    intervaldemo()
    {
      let timer = interval(1000);
      timer.subscribe(val =>{
        //console.log(val);
      });
    }
    fromEvent()
    {
      let button = document.getElementById('clickBtn')!;
      let click =fromEvent(button,'click');
      click.subscribe(() => {
        console.log('Button clicked!');
      });
    }
    observabledemo()
    { 
      //emits the data in asynchronously
      let ob = new Observable(obs => {
        obs.next('Hello'); //sending a value one by one
        obs.next('World');
        obs.complete(); }); //reprresents end of the data 

        //read data one by one
        ob.subscribe({ next :val=> console.log(val),
          //message to be printed once list is completed
          complete: () => console.log('Done!')
        });
     }
}
