import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeserviceService {

  constructor() { } 

  getCurrentHour(): number {
    return new Date().getHours(); // Returns the current hour (0-23)
  }
}
