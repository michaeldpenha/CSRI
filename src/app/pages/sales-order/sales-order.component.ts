import { Component, OnInit } from '@angular/core';
import {OrderConfig,OrderFiltersConfig,GridConfig} from '../../shared/models/index';
import {endPoints} from '../../shared/constants/index';
import {OrderListService} from '../../shared/services/index';
@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.scss']
})
export class SalesOrderComponent implements OnInit {
  public redirectView  :boolean = false;
  public refeshData : boolean = false;
  public redirectSelectedArray : any= [];
  constructor(private listService : OrderListService) { }

  ngOnInit() {
    this.listService.config = this.salesOrderConfig();
  }
  /**
   * salesOrderConfig 
   */
  public salesOrderConfig = () => {
    let config : any ;
    config = new OrderConfig('Generate PO',
      "Search using Id's,status etc.",
      'Redirect',
      [10, 20, 30],
      [new OrderFiltersConfig('I', 'text', [], 'form-group col-2', 'Sales Order Id:', 'SOID', 'orderId', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-2', 'Volume:', 'from', 'volumeFrom', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-2', ' ', 'to', 'volumeTo', 'form-control'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-2', 'Delivery Date:', 'from', 'fromDate', 'form-control'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-2', ' ', 'to', 'toDate', 'form-control '),
      new OrderFiltersConfig('S', 'options', [{ key: 'queued', value: 'Queued' }], 'form-group col-2', 'Status:', 'status', 'status', 'form-control')],
      [new GridConfig('orderId', 'Sales Order Id', true),
      new GridConfig('volume', 'Volume', true),
      new GridConfig('deliveryDate', 'Delivery Date', false),
      new GridConfig('status', 'Status Of order', true)],
      `${endPoints.baseUrl}/${endPoints.urlPath.salesOrder}/1/sales-orders`
    );
    return config;
  }
  /**
   * onRedirect
   */
  public onRedirect = (selectedEl : any) => {
    this.redirectView = true;
    this.redirectSelectedArray = selectedEl;
  }
  /**
   * onCancel 
   */
  public onCancel = () => {     
    this.redirectView = false;
  }
  /**
   * redirectTrigger
   */
  public redirectTrigger = () => {
    this.redirectView = false;
    this.refeshData = !this.refeshData;
  }
}