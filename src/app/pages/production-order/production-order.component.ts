import { Component, OnInit } from '@angular/core';
import { OrderConfig, OrderFiltersConfig, GridConfig,MOrderConfig } from '../../shared/models/index';
import { endPoints } from '../../shared/constants/index';
import { OrderListService } from '../../shared/services/index';
@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.scss']
})
export class ProductionOrderComponent implements OnInit {
  public redirectView: boolean = false;
  public refeshData: boolean = false;
  public redirectSelectedArray: any = [];
  public defaultFilter = "status";
  public defaultFilterValue = "queued";
  public responseKey = "productionOrders";
  constructor(private listService: OrderListService) { }

  ngOnInit() {
    this.listService.config = this.productionConfig();
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
      [new OrderFiltersConfig('I', 'text', [], 'form-group col-sm-3 col-md-2', 'Sales Order Id', 'soid', 'orderId', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-sm-2', 'Volume', 'from', 'volumeFrom', 'form-control'),
      new OrderFiltersConfig('I', 'number', [], 'form-group col-sm-2', '', 'to', 'volumeTo', 'form-control'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-sm-3 col-md-2', 'Delivery Date', 'from', 'fromDate', 'form-control'),
      new OrderFiltersConfig('I', 'text', [], 'form-group col-sm-3 col-md-2', '', 'to', 'toDate', 'form-control'),
      new OrderFiltersConfig('S', 'options', [{ key: 'queued', value: 'Queued' }], 'form-group col-sm-3 col-md-2', 'Status', 'status', 'status', 'form-control')
      ],
      [new GridConfig('orderId', 'Production Order Id', true,true),
      new GridConfig('volume', 'Volume', true,false),
      new GridConfig('deliveryDate', 'Delivery Date', false,false),
      new GridConfig('status', 'Status Of order', true,false)],
      `${endPoints.baseUrl}/${endPoints.urlPath.issuers}/1/satellites/1/clientMachines/1/production-orders`,
      [new MOrderConfig('orderId','ID'),new MOrderConfig('status','Status'),new MOrderConfig('volume','Volume'),new MOrderConfig('deliveryDate','Delivery Date')]
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
