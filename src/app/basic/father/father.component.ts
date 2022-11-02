import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces'

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  client?: Client

  constructor() { }

  ngOnInit(): void {
  }

  onSetClient(name: string) {
    this.client = {id:1, name}
  }

  onDeleteClient($event: any){
    this.client = $event
  }

  updateClient($event: any){
    this.client = $event
  }

}
