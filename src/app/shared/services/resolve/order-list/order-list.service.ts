import { Injectable } from '@angular/core';
import { OrderConfig } from '../../../models/order.config';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { GridConfig } from '../../../models/grid.config';
import { endPoints } from '../../../constants/endPoints';
import { OrderFiltersConfig } from '../../../models/order-filters.config';
@Injectable()
export class OrderListService {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  resolve = (route: ActivatedRouteSnapshot): any => {
    return this.populateConfig(route.data['path']);
  }
  /**
   * salesConfig
   */
  public salesConfig = (): any => {
    let config: any = {};
    config = new OrderConfig('Generate PO',
      "Search using Id's,status etc.",
      'Redirect',
      [10, 20, 30],
      [new OrderFiltersConfig('I', 'text', [], 'form-group col-2', 'Sales Order Id', 'SOID', 'orderId', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-3', 'Volume', 'from', 'volumeFrom', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-3', '', 'to', 'volumeTo', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-3', 'Delivery Date', 'from', 'fromDate', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-3', '', 'to', 'toDate', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('S', 'options', [{ key: 'queued', value: 'Queued' }], 'form-group col-3', 'Status', 'status', 'status', 'form-control')],
      [new GridConfig('orderId', 'Sales Order Id', true),
      new GridConfig('volume', 'Volume', true),
      new GridConfig('deliveryDate', 'Delivery Date', false),
      new GridConfig('status', 'Status Of order', true)],
      `${endPoints.urlPath.salesOrder}`
    );
    return config;
  }
  /**
   * productionConfig 
   */
  public productionConfig = (): any => {
    let config: any = {};
    config = new OrderConfig('Personalize',
      "Search using Id's,status etc.",
      'Redirect',
      [10, 20, 30],
      [new OrderFiltersConfig('I', 'text', [], 'form-group col-2', 'Sales Order Id', 'SOID', 'orderId', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-3', 'Volume', 'from', 'volumeFrom', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-3', '', 'to', 'volumeTo', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-3', 'Delivery Date', 'from', 'fromDate', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-3', '', 'to', 'toDate', 'form-control col-5 pull-left'),
      new OrderFiltersConfig('S', 'options', [{ key: 'queued', value: 'Queued' }], 'form-group col-3', 'Status', 'status', 'status', 'form-control'),
      new OrderFiltersConfig('S', 'options', [{ key: 'queued', value: 'Queued' }], 'form-group col-3', 'Card Program', 'card', 'card', 'form-control')],
      [new GridConfig('orderId', 'Production Order Id', true),
      new GridConfig('volume', 'Volume', true),
      new GridConfig('deliveryDate', 'Delivery Date', false),
      new GridConfig('card', 'Card Program', true),
      new GridConfig('status', 'Status Of order', true)],
      `${endPoints.urlPath.salesOrder}`
    );
    return config;
  }
  /**
   * populateConfig
   */
  public populateConfig = (path: string): any => {
    let config: any;
    switch (path.toLocaleLowerCase()) {
      case 'sales': config = this.salesConfig();
        break;
      case 'production': config = this.productionConfig();
        break;
      default: break;
    }
    return config;

  }
}
