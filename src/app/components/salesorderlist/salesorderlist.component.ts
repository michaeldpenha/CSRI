import { Component, OnInit, ViewChild } from '@angular/core';
import { GridConfig } from '../../shared/models/grid.config';
import { UtilsService } from '../../shared/services/utils/utils.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-salesorderlist',
  templateUrl: './salesorderlist.component.html',
  styleUrls: ['./salesorderlist.component.scss']
})
export class SalesorderlistComponent implements OnInit {
  public columnDefs: any = [];
  public data: any = [];
  public soListData: any = [];
  public defaultPage: number = 1;
  public pageLimit: number = 10;
  public totalRecords: number;
  public pageLimitArray: any = [];
  public placeholder: string = 'Search for SO';
  public displayFilterOption: boolean = false;
  myForm: FormGroup;
  public adavancedArray: any = [];
  public globalSearchText: any = '';
  constructor(public utils: UtilsService) {
  }

  ngOnInit() {
    this.populateSalesOrderGrid();
    this.fetchStatusOrderList();
    this.pageLimitArray = [10, 20, 30];
    this.myForm = new FormGroup({
      orderId: new FormControl(''),
      volumeFrom: new FormControl(''),
      volumeTo: new FormControl(''),
      fromDate: new FormControl(''),
      toDate: new FormControl(''),
      status: new FormControl('')
    });
  }
  /**
   * populateSalesOrderGrid
   */
  public populateSalesOrderGrid = () => {
    this.columnDefs = [
      new GridConfig('orderId', 'Sales Order Id', true, '<div>Michael</div>'),
      new GridConfig('volume', 'Volume', true, '<div>Dpenha</div>'),
      new GridConfig('deliveryDate', 'Delivery Date', false, '<div>Dpenha</div>'),
      new GridConfig('status', 'Status Of order', true, '<div>Dpenha</div>')
    ];
  }
  /**
   * fetchStatusOrderList
   */
  public fetchStatusOrderList = () => {
    this.soListData = [ {
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-10",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-05",
            "status": "Queued"
        },{
            "orderId": "1",
            "volume": 50,
            "deliveryDate": "2018-05-08",
            "status": "Queued"
        }];
    this.modifySoData(this.soListData);
  }
  /**
   * sortGridData
   */
  public sortGridData = (prop: any) => {
    let me = this;
    this.soListData.sort((a, b) => {
      return me.utils.sort(a, b, prop.property, prop.direction);
    });
    this.modifySoData(this.soListData);
  }
  /**
   * 
   */
  public previousPage = () => {
    this.defaultPage = this.defaultPage - 1;
    this.modifySoData(this.soListData);
  }
  /**
   * 
   */
  public nextPage = () => {
    this.defaultPage = this.defaultPage + 1;
    this.modifySoData(this.soListData);
  }
  /**
   * 
   */
  public goToPage = ($event) => {
    this.defaultPage = Number($event);
    this.modifySoData(this.soListData);
  }
  /**
   * 
   */
  public pageLimitChange = (count: number) => {
    this.pageLimit = count;
    this.defaultPage = 1;
    this.modifySoData(this.soListData);
  }
  /**
   * 
   */
  public modifySoData = (ary: any) => {
    this.totalRecords = ary.length;
    this.data = this.utils.sliceArray(ary, (this.defaultPage - 1) * this.pageLimit, this.defaultPage * this.pageLimit);
  }
  /**
   * searchData
   */
  public searchData = (val) => {
    this.globalSearchText = val;
    this.filterSOData();
    // this.data = this.utils.filterArray(this.soListData,)
  }
  /**
   * displayFilterOptions
   */
  public displayFilterOptions = () => {
    this.displayFilterOption = !this.displayFilterOption;
  }
  /**
   * applyFilter
   */
  public applyFilter = () => {
    let me = this;
    me.adavancedArray = [];
    let filterKeys = Object.keys(me.myForm.controls);
    filterKeys.forEach((item) => {
      (me.myForm.controls[item].value && me.myForm.controls[item].value != '') ? me.adavancedArray.push({ key: item, value: me.myForm.controls[item].value }) : '';
    });
    this.filterSOData()
  }
  /**
   * clearFilter
   */
  public clearFilter = () => {
    this.adavancedArray = [];
    this.filterSOData();
  }
  /**
   * filterSOData
   */
  public filterSOData = () => {
    let searchArray: any = Object.keys(this.soListData[0]);
    let filteredArry = this.utils.filterArray(this.soListData, this.globalSearchText, searchArray, 'or');
    filteredArry = this.adavancedArray.length > 0 ? this.applyMultipleFilter(filteredArry) : filteredArry;
    this.defaultPage = 1;
    this.modifySoData(filteredArry);
  }
  /**
   * applyMultipleFilter
   */
  public applyMultipleFilter = (ary: any[]): any[] => {
    let filterAry: any = ary;
    this.adavancedArray.forEach((obj) => {
      filterAry = ['volumefrom', 'volumeto', 'fromdate', 'todate'].indexOf(obj.key.toLowerCase()) === -1 ? this.utils.filterArray(filterAry, obj.value, [obj.key], 'and') : this.filterArrayBasedOnConidition(filterAry, obj);
    });
    return filterAry;
  }
  /**
   * filterArrayBasedOnConidition
   */
  public filterArrayBasedOnConidition = (ary: any, obj: any): any[] => {
    let filteredArry: any = ary;
    switch (obj.key.toLowerCase()) {
      case 'fromdate': filteredArry = this.utils.filterArrayRangeBased(ary, 'deliveryDate', obj.value, 'greaterorequaltodate');
        break;
      case 'todate': filteredArry = this.utils.filterArrayRangeBased(ary, 'deliveryDate', obj.value, 'lesserorequaltodate');
        break;
      case 'volumeto':filteredArry =  this.utils.filterArrayRangeBased(ary, 'volume', obj.value, 'lesserorequalto');
        break;
      case 'volumefrom':filteredArry = this.utils.filterArrayRangeBased(ary, 'volume', obj.value, 'greaterorequalto');
        break;
    }
    return filteredArry;
  }
}
