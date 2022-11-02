import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-route',
  templateUrl: './counter-route.component.html',
  styleUrls: ['./counter-route.component.scss']
})
export class CounterRouteComponent implements OnInit {

 counter: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const initialVAlue = Number(this.route.snapshot.paramMap.get('initial'))
    this.counter= isNaN(initialVAlue)? 10 : initialVAlue
  }

  onClick(action:number) {
    this.counter += action
  }

}
