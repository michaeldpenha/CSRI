import { TestBed, inject } from '@angular/core/testing';

import { OrderListResolveService } from './order-list-resolve.service';

import { RouterTestingModule } from '@angular/router/testing';
import { OrderListService} from '../../order-list/order-list.service';
describe('OrderListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderListResolveService,OrderListService],
      imports : [RouterTestingModule]
    });
  });

  it('should be created', inject([OrderListResolveService], (service: OrderListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
