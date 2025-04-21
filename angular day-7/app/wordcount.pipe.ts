import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordcount',
  standalone: false
})
export class WordcountPipe implements PipeTransform {

  transform(value: string, ...args: string[]): number {
    if(!value)
    {
      return 0;
    }
    else
    {
      const words = value.trim().split(/\s+/);
        return words.length; 
    }
  }

}
