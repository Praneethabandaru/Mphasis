import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent { 
  a:string='Hello ajay';
  data:string='' //comes from child 
  @ViewChild("d1") st!:ElementRef //using ! bcz will be assigning the values later on
  changesettings()
  {
    this.st.nativeElement.innerText="Iam excited to take test";
    //st means local and we use nativeElement bcz it can be from child also or parent also
    this.st.nativeElement.style.background='pink';
  }
  changecontent()
  {
    
  }
  // display(p:string)
  // {
  //   this.data=p;
  // }

}
