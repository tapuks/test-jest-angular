import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(action:number) {
    this.counter += action
  }

}
