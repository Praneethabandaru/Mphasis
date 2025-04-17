import { Component, OnInit } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  count: number = 0;

  constructor(private counterService: CounterserviceService) {}

  ngOnInit(): void {
    // Initialize the count
    this.count = this.counterService.getCount();

    // Subscribe to the countChanged EventEmitter
    this.counterService.countChanged.subscribe((updatedCount: number) => {
      this.count = updatedCount;
    });
  }

  increment(): void {
    this.counterService.incrementCount(); // Increment the count
  }
}