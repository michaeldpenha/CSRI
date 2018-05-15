import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { GridService } from './grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  // Input Parameters from the parent component
  @Input() columnDefs: any = [];
  @Input('data') gridData: any = [];
  @Input() gridClass: string;
  @Input() gridConfig: any = {};
  @Input() allItemsSelected : boolean = false;
  @Output() sortTrigger = new EventEmitter<any>();
  @Output() allChecked = new EventEmitter<any>();
  @Output() rowSelected = new EventEmitter<any>();
  @Output() onCellClick = new EventEmitter<any>();
  public reverseSort: boolean = true;

  // Events Exposed to parents

  //default values 
  public noRecord: string = 'No data found'; // Need to put this string in a constant file


  constructor(private gridService: GridService) { }

  ngOnInit() {
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
    if (property == config.name && config.enableSorting) {
      return true;
    }
    return false;
  }
  /**
   * triggerSort
   */
  public triggerSort = (config: any): any => {
    if (!config.enableSorting) {
      return;
    }
    this.gridService.sortField = config.name;
    this.reverseSort = !this.reverseSort;
    let direction = this.reverseSort ? 1 : -1;
    this.sortTrigger.emit({ direction: direction, property: this.gridService.sortField });
  }
  /**
   * allSelected
   */
  public allSelected = (event) => {
    this.allChecked.emit(event);
  }
  /**
   * rowSelection
   */
  public rowSelection = (item) => {
    this.rowSelected.emit(item);
  }
  /**
   * cellClick
   */
  public cellClick = (dataIndex : string,id : string) => {
    this.onCellClick.emit({dataIndex : dataIndex, id : id});
  }
}
