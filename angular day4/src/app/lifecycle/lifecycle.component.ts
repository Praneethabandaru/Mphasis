import { Component } from '@angular/core';

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
}
