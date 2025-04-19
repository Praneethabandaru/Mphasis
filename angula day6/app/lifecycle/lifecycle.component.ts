import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkalphabet } from './UserValidate';

@Component({
  selector: 'app-lifecycle',
  standalone: false,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent { 
  d:string='';
  showdata()
  {
    var res=(document.getElementById("t1") as HTMLInputElement).value
    this.d=res;
  }
  b:boolean=true;
  show()
  {
    this.b!=this.b;
  }

  f:any 
    constructor()
    {
      this.f=new FormGroup(
        {
          uname:new FormControl("admin",[Validators.required,Validators.pattern("[a-z]+")]),
          email:new FormControl("",[Validators.required,Validators.email]),
          message:new FormControl("",[Validators.required,Validators.maxLength(10)]),
          address:new FormControl("",[checkalphabet])
        }
      )
    }
}
