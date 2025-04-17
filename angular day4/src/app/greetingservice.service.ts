import { Injectable } from '@angular/core';
import { TimeserviceService } from './timeservice.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private timeService: TimeserviceService) { }

  greet(name: string): string {
    const currentHour = this.timeService.getCurrentHour();

    if (currentHour < 12) {
      return `Good Morning, ${name}!`;
    } else if (currentHour < 18) {
      return `Good Afternoon, ${name}!`;
    } else {
      return `Good Evening, ${name}!`;
    }
  }
}