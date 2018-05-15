import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-m-order-list',
  templateUrl: './m-order-list.component.html',
  styleUrls: ['./m-order-list.component.scss']
})
export class MOrderListComponent implements OnInit {
  public noRecord : string = "No Data Found";
  @Input() data : any;
  @Output() rowSelected = new EventEmitter<any>();
  @Input() config : any;
  constructor() { }

  ngOnInit() {
  }
  /**
   * recordSelected
   */
  public recordSelected = (e) => {
    this.rowSelected.emit(e);
  }

}
