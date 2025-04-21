import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rev',
  standalone: false
})
export class RevPipe implements PipeTransform {

  transform(value: any): any { 
    let a:string='';
    if(!value) 
    {
      return ' ';
    }
    else
    {
      // return value.split('').reverse().join('');
      for(let i=value.length-1;i>=0;i--)
      {
        a = a+value[i];
      }
      return a ;
    }
  }

}
