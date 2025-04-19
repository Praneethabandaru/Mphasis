import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  ngOnInit()
  {
    //code to make session null
    sessionStorage.removeItem("uname") 
  }

}
