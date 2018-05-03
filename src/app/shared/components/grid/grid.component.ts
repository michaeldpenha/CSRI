import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnChanges {
  // Input Parameters from the parent component
  @Input() columnDefs: any = [];
  @Input('data') gridData: any = [];
  @Input() gridClass: string;
  @Input() gridConfig: any = {};
  @Output() sortTrigger = new EventEmitter<any>(); 
  public reverseSort: boolean = true;

  // Events Exposed to parents

  //default values 

  public orderByField: string;
  public defaultPage: number = 1;
  public defaultSize: number = 15;
  public noRecord: string = 'No data found'; // Need to put this string in a constant file


  constructor(private gridService: GridService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['gridData']) {
      this.initGrid();
    }
  }

  /**
   * initGrid
   */
  public initGrid = () => {
    this.fetchGridInfo();
  }
  /**
   * fetchGridInfo
   */
  public fetchGridInfo = () => {
    let me = this;

  }
  /**
   * customTemplate
   */
  public customTemplate = (data: any, colDef: any): any => {
    return data[colDef.name];
  }
  /**
   * showSortingOptions
   */
  public showSortingOptions = (config: any): boolean => {
    let property = this.gridService.sortField;
    if (property == config.name) {
      return true;
    }
    return false;
  }
  /**
   * triggerSort
   */
  public triggerSort = (config: any): any => {
    this.gridService.sortField = config.name;
    this.reverseSort = !this.reverseSort;
    let direction = this.reverseSort ? 1 : -1;
    this.sortTrigger.emit({direction : direction,property : this.gridService.sortField});
  }
}
