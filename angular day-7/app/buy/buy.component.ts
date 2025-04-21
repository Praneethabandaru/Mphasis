import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  standalone: false,
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
   q:number=0;
   pid:string='';
   pname:string='';
   price:number=0;
   description:string='';
   pimage: string = ''; 
  constructor(public ob:ActivatedRoute)
  {
    //logic t assign the value for a variable 
    //value comes from queryString 

      //in the url there are many query parameters present in form of keyvalue pairs
    //so subsribe method wil read all keyvalues and load in data object 
    ob.queryParams.subscribe(data =>{
      this.pid = data["a"],
      this.pname = data["b"],
      this.price = data["c"],
      this.pimage=data["d"],
      this.description=data["e"]
    })    
   

  }

}
