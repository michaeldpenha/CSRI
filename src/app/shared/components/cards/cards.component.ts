import { Component, OnInit, Input, TemplateRef, ContentChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 
  @Input() cardDetail:Object;
  
  constructor() { }

  ngOnInit() {
  }
  @Output() cardIsSelected: EventEmitter<string> =
            new EventEmitter<string>();

 

    onClick(): void {
        this.cardIsSelected.emit(`The rating ${this.cardIsSelected} was clicked!`);
    }
}
