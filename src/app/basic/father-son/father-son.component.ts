import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.scss']
})
export class FatherSonComponent implements OnInit {
  @Input() client?:Client;
  @Output() onDeleteClient = new EventEmitter()
  @Output() onClientUpdate = new EventEmitter<Client>()
  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.client = undefined;
    this.onDeleteClient.emit(this.client)
  }
  update(id: number) {
    if (!this.client) {return}
   
    this.client = {...this.client, id}
    this.onClientUpdate.emit(this.client);
  }

}
