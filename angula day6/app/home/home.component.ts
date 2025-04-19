import { Component, Injector } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[MathService]
})
export class HomeComponent { 
  cssStyles ={};
  applyCss()
  { 
    let c=(document.querySelector("input[name='addcss']:checked") as HTMLInputElement)?.value;
    let re="";
    if( c === "addcss")
    {
      this.cssStyles = {
        'background-color': 'blue',
        'color': 'white',
        'border-radius': '5px'
      };
    }
    else if(c === "removecss")
    {
      this.cssStyles={};
    }
  }
  isBoldChecked = false;
  isItalicChecked = false;
  iscolorChecked=false;
  isTextColorChecked = false;
  isUnderlineChecked = false;
  isBorderColorChecked = false;

  toggleStyle(event: Event, style: string) {
 
    const checkbox = event.target as HTMLInputElement; // Access the checkbox element
    switch (style) {
      case 'bold':
        this.isBoldChecked = checkbox.checked;
        break;
      case 'italic':
        this.isItalicChecked = checkbox.checked;
        break;
        case 'background-color':
        this.iscolorChecked = checkbox.checked;
        break;
        case 'textColor':
        this.isTextColorChecked = checkbox.checked;
        break;
      case 'underline':
        this.isUnderlineChecked = checkbox.checked;
        break;
        case 'borderColor':
        this.isBorderColorChecked = checkbox.checked;
        break;
    }
  } 
 
  //private:object can be access within the file
  //public:ibject can be accessed outside the file also
  // constructor(public ob:MathService)
  result:string='' ;
  a:number=20;
  b:number=30;
  st:string="test debugging!!";
  bg:string="background:red"
  fg:string="color:yellow"
  heading:string="welcome to home page!!"

  private ob!:MathService;
  constructor(i:Injector)
  { 
    

    //debugger
    
    // this.result=ob.Addnums(10,20);
    this.result="the sum is: "+(this.a+this.b); 

   //if 
   //it is satisy all service1
   //else call service2

    //this.result=ob.Addnums(10,20); 
    // this.result=this.array(['us','america'])
  }
  add()
  {
    this.result=this.ob.Addnums(10,20);
  } 
  // array(a:string[]):string[]{
  //   return a; 
  // } 
  product = {
    name: 'iPhone 15',
    price: 1299.99,
    releaseDate: new Date(2024, 8, 15)
  };
}