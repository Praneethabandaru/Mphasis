import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterserviceService {

  count: number = 0;
  countChanged: EventEmitter<number> = new EventEmitter<number>(); // EventEmitter for count changes

  constructor() {}

  incrementCount(): void {
    this.count++;
    this.countChanged.emit(this.count); // Emit the updated count
  }

  getCount(): number {
    return this.count;
  }
}
