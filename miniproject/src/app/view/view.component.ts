import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
import { ipizza } from '../pizzadet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent { 
  pizzaarray:ipizza[]=[];
    constructor(public ob:PizzadetService)
    {
      this.ob.getpizzadet().subscribe(result => {
        console.log(result); this.pizzaarray = result}) 
    }
}

