import { Component, OnInit } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  err:string='';
  router: any;
  constructor(public r : Router, private counterService: CounterserviceService)
  {

  }
  validate(frm:any)
  {
    //npw frm contains all input values
    // alert(frm.uname)
    //uname:admin && pass:india
    if(frm.uname=="admin" &&frm.pwd=="india")
    { 
      sessionStorage.setItem("uname","frm.uname")
       this.r.navigate(['product'])
    }
    else
    {
        this.err="inavaild username or password!!"
    }
  } 
  MyExperience=false;
  display(frm:any)
  {
    // alert(form:name)
  } 
  
  count: number = 0;
  ngOnInit(): void {
    // Initialize the count
    this.count = this.counterService.getCount();

    // Subscribe to the countChanged EventEmitter
    this.counterService.countChanged.subscribe((updatedCount: number) => {
      this.count = updatedCount;
    });
  }

  increment(): void {
    this.counterService.incrementCount(); // Increment the count
  }
}