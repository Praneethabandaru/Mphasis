import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  f:any;
  constructor(){
    this.f = new FormGroup({
      uname:new FormControl("",[Validators.required]),
      pass:new FormControl("",[Validators.required,Validators.maxLength(10)])
    })
  }
}
