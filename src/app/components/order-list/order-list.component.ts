import { Component, OnInit, ViewChild } from '@angular/core';
import { GridConfig } from '../../shared/models/grid.config';
import { UtilsService } from '../../shared/services/utils/utils.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { BsDatepickerConfig } from "ngx-bootstrap";
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  public columnDefs: any = [];
  public data: any = [];
  public listData: any = [];
  public defaultPage: number = 1;
  public pageLimit: number = 10;
  public totalRecords: number;
  public pageLimitArray: any = [];
  public placeholder: string = "";
  public filterButtonClass: string = "col-2 filter-button fa fa-filter";
  public displayFilterOption: boolean = false;
  filterForm: FormGroup;
  public adavancedArray: any = [];
  public globalSearchText: any = '';
  public allCheck: boolean = false;
  public beforeRedirect: string = '';
  public redirectText: string = '';
  public isItemSelected: boolean = false;
  public selectedArray: any = [];
  public masterButtonClass:string= "btn-master";
  public secondaryButtonClass:string= "btn-secondary";
  public config :any;
  public advanFilterForm: any;
  dateFromPickerConfig :Partial<BsDatepickerConfig>;
  dateToPickerConfig :Partial<BsDatepickerConfig>;

  constructor(public utils: UtilsService,public route :ActivatedRoute,public http: HttpClient) {
  }

  ngOnInit() {
    this.config = this.route.snapshot.data['config'];
    this.initializeOrderList();
  }
  /**
   * initializeOrderList
   */
  public initializeOrderList = () => {
    this.populateSalesOrderGrid();
    this.fetchStatusOrderList();
    this.defaultPageSettings();
    this.filterFormsControls(); 
  }
  /**
   * defaultPageSettings
   */
  public defaultPageSettings = () => {
    this.pageLimitArray =this.config.perPageArray;
    this.redirectText = this.config.redirect;
    this.beforeRedirect = this.config.beforeRedirect;
    this.placeholder = this.config.globalPlaceholder;
  }
  /**
   * filterFormsControls
   */
  public filterFormsControls = () => {
    let formGrp : any = {};
    this.advanFilterForm = this.config.filterForm;
    this.advanFilterForm.forEach((item)=>{
      formGrp[item.dataIndex] = new FormControl('');
    });
    this.filterForm = new FormGroup(formGrp);
 }
ngDoCheck(){
this.dateFromPickerConfig = Object.assign({},{maxDate:this.filterForm.controls['toDate'].value});
this.dateToPickerConfig = Object.assign({},{minDate:this.filterForm.controls['fromDate'].value});
}
  /**
   * populateSalesOrderGrid
   */
  public populateSalesOrderGrid = () => {
    this.columnDefs = this.config.gridConfigs;
  }
  /**
   * fetchStatusOrderList
   */
  public fetchStatusOrderList = () => {
    this.http.get(this.config.url).toPromise().then(data => {
        this.listData = data['salesOrders'];
        this.modifySoData(this.listData);
    },err => {
      this.listData = [];
      this.modifySoData(this.listData);
    })
    // this.listData = [{
    //   "orderId": "15",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "13",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "12",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "11",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "10",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-10",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-05",
    //   "status": "Queued"
    // }, {
    //   "orderId": "1",
    //   "volume": 50,
    //   "deliveryDate": "2018-05-08",
    //   "status": "Queued"
    // }];
    
  }
  /**
   * sortGridData
   */
  public sortGridData = (prop: any) => {
    let me = this;
    this.listData.sort((a, b) => {
      return me.utils.sort(a, b, prop.property, prop.direction);
    });
    this.modifySoData(this.listData);
  }
  /**
   * 
   */
  public previousPage = () => {
    this.defaultPage = this.defaultPage - 1;
    this.modifySoData(this.listData);
  }
  /**
   * 
   */
  public nextPage = () => {
    this.defaultPage = this.defaultPage + 1;
    this.modifySoData(this.listData);
  }
  /**
   * 
   */
  public goToPage = ($event) => {
    this.defaultPage = Number($event);
    this.modifySoData(this.listData);
  }
  /**
   * 
   */
  public pageLimitChange = (count: number) => {
    this.pageLimit = count;
    this.defaultPage = 1;
    this.modifySoData(this.listData);
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
    // this.data = this.utils.filterArray(this.listData,)
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
    let filterKeys = Object.keys(me.filterForm.controls);
    filterKeys.forEach((item) => {
      (me.filterForm.controls[item].value && me.filterForm.controls[item].value != '') ? me.adavancedArray.push({ key: item, value: me.filterForm.controls[item].value }) : '';
    });
    this.filterSOData();
    this.displayFilterOptions();
  }
  /**
   * clearFilter
   */
  public clearFilter = () => {
    this.adavancedArray = [];
    this.filterForm.reset();
    this.filterSOData();
  }
  /**
   * filterSOData
   */
  public filterSOData = () => {
    let searchArray: any = Object.keys(this.listData[0]);
    let filteredArry = this.utils.filterArray(this.listData, this.globalSearchText, searchArray, 'or');
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
      case 'volumeto': filteredArry = this.utils.filterArrayRangeBased(ary, 'volume', obj.value, 'lesserorequalto');
        break;
      case 'volumefrom': filteredArry = this.utils.filterArrayRangeBased(ary, 'volume', obj.value, 'greaterorequalto');
        break;
    }
    return filteredArry;
  }
  /**
   * allSOSelected
   */
  public allSOSelected = (a) => {
    this.selectedArray = [];
    this.allCheck = !this.allCheck;
    this.listData.forEach((item) => {
      item.selected = this.allCheck;
      this.allCheck ? this.selectedArray.push(item) : '';
    });
  }
  /**
   * generatePO
   */
  public generatePO = () => {
    console.log('PO');
  }
  /**
   * redirect
   */
  public redirect = () => {
    console.log('Redirect');
  }
  /**
   * rowSelected
   */
  public rowSelected = (item) => {
    this.populateSelectedArray(item);
  }
  /**
   * populateSelectedArray
   */
  public populateSelectedArray = (item : any) => {
    let index = this.utils.fetchObjectFromAnArray(this.listData, item, 'orderId');
    this.listData[index].selected = !this.listData[index].selected;
    if (this.listData[index].selected) {
      this.selectedArray.push(this.listData[index]);
    } else {
      let selectedIndx = this.utils.fetchObjectFromAnArray(this.selectedArray, item, 'orderId');
      this.selectedArray.splice(selectedIndx, 1);
    }
  }
  /**
   * removeFilter
   */
  public removeFilter = (item) => {
    let index = this.utils.fetchObjectFromAnArray(this.adavancedArray, item.value, item.key);
    this.filterForm.controls[item.value.key].setValue('');
    this.adavancedArray.splice(index,1);
    this.filterSOData();
  }
  /**
   * ifDateField
   */
  public ifDateField = (item : any) => {
    return item.dataIndex.toLowerCase().indexOf('date') > -1;
  }
}
