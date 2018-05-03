import { Component, OnInit } from '@angular/core';
import { GridConfig } from '../../shared/models/grid.config';
import { UtilsService } from '../../shared/services/utils/utils.service';
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
  public pageLimitArray : any = [];
  constructor(public utils: UtilsService) { }

  ngOnInit() {
    this.populateSalesOrderGrid();
    this.fetchStatusOrderList();
    this.pageLimitArray = [10,20,30];
  }
  /**
   * populateSalesOrderGrid
   */
  public populateSalesOrderGrid = () => {
    this.columnDefs = [
      new GridConfig('soId', 'Sales Order Id', true, '<div>Michael</div>'),
      new GridConfig('volume', 'Volume', true, '<div>Dpenha</div>'),
      new GridConfig('deliverydate', 'Delivery Date', false, '<div>Dpenha</div>'),
      new GridConfig('statusOfOrder', 'Status Of order', true, '<div>Dpenha</div>')
    ];
  }
  /**
   * fetchStatusOrderList
   */
  public fetchStatusOrderList = () => {
    this.soListData = [{
      soId: '23',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '11',
      volume: 55,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '223',
      volume: 45,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '45',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '56',
      volume: 44,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '23',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '11',
      volume: 55,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '223',
      volume: 45,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '45',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '56',
      volume: 44,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '23',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '11',
      volume: 55,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '223',
      volume: 45,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '45',
      volume: 33,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }, {
      soId: '56',
      volume: 44,
      deliverydate: '22/3/2019',
      statusOfOrder: 'Query'
    }];
    this.totalRecords = this.soListData.length;
    this.modifySoData();
  }
  /**
   * sortGridData
   */
  public sortGridData = (prop: any) => {
    let me = this;
    this.soListData.sort((a, b) => {
      return me.utils.sort(a, b, prop.property, prop.direction);
    });
    this.modifySoData();
  }
  /**
   * 
   */
  public previousPage = () => {
    this.defaultPage = this.defaultPage - 1;
    this.modifySoData();
  }
  /**
   * 
   */
  public nextPage = () => {
    this.defaultPage = this.defaultPage + 1;
    this.modifySoData();
  }
  /**
   * 
   */
  public goToPage = ($event) => {
    this.defaultPage = Number($event);
    this.modifySoData();
  }
  /**
   * 
   */
  public pageLimitChange = (count: number) => {
    this.pageLimit = count;
    this.defaultPage = 1;
    this.modifySoData();
  }
  /**
   * 
   */
  public modifySoData = () => {
    this.data = this.utils.sliceArray(this.soListData, (this.defaultPage - 1) * this.pageLimit, this.defaultPage * this.pageLimit);
  }
}
