import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent { 
  //reprsents data comes from parent component in form of attribute
  @Input() message : string='';
  @Output() 
  myevent:EventEmitter<string> = new EventEmitter<string>;
  executefunc()
  {
    //code to run the event 
    this.myevent.emit('angular rocks!!')

  }
  @ContentChild("myid") st!:ElementRef
  changecontent()
  {
    this.st.nativeElement.style.background='green'
  }
  
}
