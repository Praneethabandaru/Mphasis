import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: false,
  // pure:false
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    console.log("transform called")
    return value - (value*args[0])/100;
  }

}
