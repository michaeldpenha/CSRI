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
  constructor(public utils: UtilsService) { }

  ngOnInit() {
    this.populateSalesOrderGrid();
    this.fetchStatusOrderList();
  }
  /**
   * populateSalesOrderGrid
   */
  public populateSalesOrderGrid = () => {
    this.columnDefs = [
      new GridConfig('soId', 'Sales Order Id', false, '<div>Michael</div>'),
      new GridConfig('volume', 'Volume', false, '<div>Dpenha</div>'),
      new GridConfig('deliverydate', 'Delivery Date', false, '<div>Dpenha</div>'),
      new GridConfig('statusOfOrder', 'Status Of order', false, '<div>Dpenha</div>')
    ];
  }
  /**
   * fetchStatusOrderList
   */
  public fetchStatusOrderList = () => {
    this.data = [{
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
    }]
  }
  /**
   * sortGridData
   */
  public sortGridData = (prop: any) => {
    let me = this;
    this.data.sort((a, b) => {
      return me.utils.sort(a, b, prop.property, prop.direction);
    });
  }
}
