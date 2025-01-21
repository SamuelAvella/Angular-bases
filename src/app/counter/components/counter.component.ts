import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 10;
  
  increasedBy (value:number): void {
    this.counter += value
  }
  
  resetCounter() {
    this.counter = 10 
  }

  decreasedBy (value: number): void {
    this.counter -= value
  }
  
}
