import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-removable-card',
  templateUrl: './removable-card.component.html',
  styleUrls: ['./removable-card.component.scss']
})
export class RemovableCardComponent implements OnInit {
  @Input() label : string;
  @Input() item : string;
  @Output() removeCard = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  /**
   * removeContainer 
   */
  public removeContainer = (item,key) => {
    this.removeCard.emit({key : key,value : item});
  }

}
