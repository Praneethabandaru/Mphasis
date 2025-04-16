import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
}