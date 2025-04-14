import { Component } from '@angular/core'; //package 
         //classname       //filename

@Component({
  selector: 'hi',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlineshop';
  
  name:string="raj";
  age:number=23;
  IsIndian:boolean=true;
  address:any= 'road no.2 jyothi nagar'; 
   url:string="https://youtube.com"; 
   url2:string="http://microsoft.com";
   url3:string="https://images.creativemarket.com/0.1.0/ps/11223658/3640/2410/m1/fpnw/wm1/rbn_light_color_hello-.jpg?1635848501&s=e32af5e9856a589eed0fd58e0aa82784";
   url4:string="assets/hi.png";

  display()
  {
    return "Hello World"
  }
 result:number=0;
  Addnums()
  {
    let a = (document.getElementById("t1") as HTMLInputElement).value;
    let b = (document.getElementById("t2") as HTMLInputElement).value;
    this.result = parseInt(a) + parseInt(b);
    alert("hi");
  } 
  result1:number=0;
  simpleinterest()
  {
     let x=(document.getElementById("t3") as HTMLInputElement).value;
     let y=(document.getElementById("t4") as HTMLInputElement).value;
     let z=(document.getElementById("t5") as HTMLInputElement).value; 
     this .result1 = (parseInt(x) * parseInt(y) * parseInt(z) )/ 100;
  }
  rp:string="";
  register()
  {
    let p = (document.getElementById("t6") as HTMLInputElement).value;
    let q = (document.getElementById("t7") as HTMLInputElement).value;
    let r = (document.querySelector("input[name='gender']:checked") as HTMLInputElement).value;  
    let s = (document.getElementById("t9") as HTMLInputElement).value;
    let t = (document.getElementById("t10") as HTMLSelectElement).value; 
    this.rp= `<ul> 
    <li> Name : ${p} </li>
    <li> DOB  : ${q}</li>
    <li>Gender: ${r}</li>
    <li> Email: ${s} </li>
    <li>Nationality : ${t}</li>
    </ul>`;
  }
  

}
