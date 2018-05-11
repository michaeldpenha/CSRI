import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import { UtilsService } from '../../shared/services/utils/utils.service';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderConfig } from '../../shared/models/order.config';
import { OrderFiltersConfig } from '../../shared/models/order-filters.config';
import { GridConfig } from '../../shared/models/grid.config';
import { endPoints } from '../../shared/constants/endPoints';
import { OrderListService } from '../../shared/services/order-list/order-list.service';
describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, BsDatepickerModule.forRoot(), RouterTestingModule, HttpClientModule],
      providers: [UtilsService, OrderListService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    component.listService.config = new OrderConfig('Generate PO',
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
      `${endPoints.baseUrl}/${endPoints.urlPath.salesOrder}/1/sales-orders`);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should sort Grid Data Descending', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.sortGridData({ property: 'orderId', direction: -1 });
    expect(component.listData[0].orderId).toBe('15');
  });

  it('should sort Grid Data Ascending', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.sortGridData({ property: 'orderId', direction: 1 });
    expect(component.listData[0].orderId).toBe('10');
  });
  it('should give the next page', () => {
    component.nextPage();
    expect(component.defaultPage).toBe(2);
  });
  it('should give the previous page', () => {
    component.previousPage();
    expect(component.defaultPage).toBe(0);
  });
  it('should the specific page data', () => {
    component.goToPage(5);
    expect(component.defaultPage).toBe(5);
  });
  it('should change the total number of records in one page', () => {
    component.pageLimitChange(30);
    expect(component.pageLimit).toBe(30);
  });
  it('should search record from grid ', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.searchData('10');
    expect(component.data.length).toBe(1);
  });
  it('should display Advanced filter options', () => {
    component.displayFilterOption = false;
    component.displayFilterOptions();
    expect(component.displayFilterOption).toBe(true);
  });
  it('should not display Advanced filter options', () => {
    component.displayFilterOption = true;
    component.displayFilterOptions();
    expect(component.displayFilterOption).toBe(false);
  });
  it('should apply filter', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.filterForm.controls['orderId'].setValue('15');
    component.globalSearchText = '';
    component.applyFilter();
    expect(component.data.length).toBe(1);
  })

  it('should clear filter', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.filterForm.controls['orderId'].setValue('15');
    component.clearFilter();
    expect(component.filterForm.controls['orderId'].value).toBeNull();
  });

  it('should filter array on condition', () => {
    component.listData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume: '30'
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume: '100'
    }];
    component.filterForm.controls['volumeFrom'].setValue('10');
    component.filterForm.controls['volumeTo'].setValue('40');
    component.filterForm.controls['fromDate'].setValue(new Date("05/01/2018"));
    component.filterForm.controls['toDate'].setValue(new Date("05/08/2018"));
    component.globalSearchText = '';
    component.applyFilter();
    expect(component.data.length).toBe(1);
  });
  it('should select all PO', () => {
    component.listData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.allCheck = false;
    component.allSOSelected({});
    expect(component.selectedArray.length).toBe(component.listData.length);

  });
  it('should seleect a particular row', () => {
    component.listData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume: '30'
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume: '100'
    }];
    component.rowSelected({ orderId: '15' });
    expect(component.selectedArray[0].orderId).toBe('15');
  });
  it('should remove a slection of a particular row', () => {
    component.listData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume: '30',
      selected: true
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume: '100'
    }];
    component.selectedArray.push({ orderId: '15' });
    expect(component.selectedArray.length).toBe(1);
    component.rowSelected({ orderId: '15' });
    expect(component.selectedArray.length).toBe(0);
  });
});
