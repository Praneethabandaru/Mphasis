import { Component, Input,OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-childpage',
  standalone: false,
  templateUrl: './childpage.component.html',
  styleUrl: './childpage.component.css'
})
export class ChildpageComponent {
  @Input() message :string="Hello!!"

  ngOnChanges(st:SimpleChange)
  {
    console.log('ngOnchanges:', st)
  }
  constructor()
  {
    //component does not at all exist when is the construcotr is not called
    //not yet ready
  }
  ngOnInit()
  {
    //only once in lifetime
    // best place initialization of global variables
    //  connection to db 
    // intialize properties
    console.log("init function called")
  }
  ngDoCheck()
  { 
    //never write any long code here 
    //else you will face performance issue.
    console.log("do check method called")
    //when you monitor all changes happened in the component
  }
  ngOnDestroy()
  {//best place for writing code to destroy objects or disconnect from database (or) any cleanup code goes here
    console.log("component does not exists")
  }
  test()
  {
  alert("hello")
  }
  test1()
  {
  alert("bye good nght!!")
  }

}
