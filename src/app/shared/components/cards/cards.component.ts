import { Component, OnInit, Input, TemplateRef, ContentChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 
  @Input() cardDetail:Object;
  @Input() isCheckBoxtoChild: boolean;
  @Output() cardIsSelected: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    //console.log(this.isCheckBoxtoChild);
  }
  

}
