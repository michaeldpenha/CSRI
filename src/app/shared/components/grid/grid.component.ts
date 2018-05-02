import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GridService } from '../../services/grid/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  // Input Parameters from the parent component
  @Input() columnDefs : any = [];
  @Input() data ; any = [];
  @Input() gridClass : string;
  @Input() gridConfig : any = {};
  // Events Exposed to parents
  
  //default values 
  public defaultPage : number = 1;
  public defaultSize : number = 15;
  public noRecord: string = 'No data found'; // Need to put this string in a constant file
   

  constructor(private gridService : GridService) { }

  ngOnInit() {
  }

}
