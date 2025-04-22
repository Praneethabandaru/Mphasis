import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent { 
  id:number=0;
  toppings:string="";
  sauce:string="";
  size:string="";
  features:string="";
  price:number=0;
  image:string="";
  q: number = 0; 

  constructor(public ob:ActivatedRoute)
  {
    ob.queryParams.subscribe(data =>{
      this.id = data["a"];
      this.toppings =data["b"];
      this.sauce =data["c"];
      this.size =data["d"];
      this.features =data["e"];
      this.image =data["f"];
      this.price =data["g"];
    })
  }
}
