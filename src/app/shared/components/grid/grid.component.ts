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
  @Input() defaultPage: number = 1;
  @Input() pageLimit: number = 10;
  @Input() totalRecords: number;
  @Input() pageLimitArray : any = [];
  @Input() allItemsSelected : boolean = false;
  @Output() sortTrigger = new EventEmitter<any>();
  @Output() previousPage = new EventEmitter<any>();
  @Output() nextPage = new EventEmitter<any>();
  @Output() goToPage = new EventEmitter<any>();
  @Output() pageLimitChange = new EventEmitter<any>();
  @Output() allChecked = new EventEmitter<any>();
  @Output() rowSelected = new EventEmitter<any>();
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
   * 
   */
  public prevPage = () =>{
    this.previousPage.emit();
  }
  /**
   * nextPage
   */
  public goNext = () => {
    this.nextPage.emit();
  }
  /**
   * goToPage
   */
  public moveToPage = (event : any ) =>{
    this.goToPage.emit(event);
  }
  /**
   * changeLimit
   */
  public changeLimit = (event : any ) => {
    this.pageLimitChange.emit(event);
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
}
