import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService { 
  prod: iProd[]=
  [
   {pid:'p001', pname:'watch', price:120,description:'TITAN WATCH', pimage:'/assets/b.jpg'},
   {pid:'p002', pname:'car', price:100, description:'BALENO CAR', pimage:'/assets/car.jpg'},
   {pid:'p003', pname:'mouse', price:500, description:'PORTNOICS MOUSE', pimage:'/assets/mouse.jpg'},
   {pid:'p004', pname:'tv', price:5200, description:'ONEPLUS TV', pimage:'/assets/tv.jpg'},
   {pid:'p005', pname:'projector', price:20, description:'PROJECTOR', pimage:'/assets/projector.jpg'},
   {pid:'p006', pname:'fan', price:5000,description:'FAN', pimage:'/assets/power.jpg'}
 ]
  constructor() { }
} 
interface iProd{
  pid:string;
  pname:string;
  price:number;
  description:string
  pimage:string;
}
