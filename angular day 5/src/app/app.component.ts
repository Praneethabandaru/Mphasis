import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greetingservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting: string = '';

  constructor(private greetingService: GreetingService) {}
 
  ngOnInit(): void {
    const userName = 'Praneethaa'; // Hardcoded name for simplicity
    this.greeting = this.greetingService.greet(userName);
  }
}