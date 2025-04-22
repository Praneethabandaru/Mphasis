import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    f:any;
    countries:string[]=["India","USA","Uk","Switzerland"];
    constructor(){
      this.f = new FormGroup({
        uname:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required,Validators.email]),
        pass:new FormControl("",[Validators.required,Validators.maxLength(10)]),
        cpass:new FormControl("",[Validators.required,Validators.maxLength(10)]),
        gender:new FormControl('',Validators.required),
        country:new FormControl('',[Validators.required]),
      });
    } 
    onsubmit() {
      if (this.f.valid) {
        console.log('Form Submitted:', this.f.value);
        alert('Registration successful!');
      } else {
        alert('Please fill out the form correctly.');
      }
    }
}
