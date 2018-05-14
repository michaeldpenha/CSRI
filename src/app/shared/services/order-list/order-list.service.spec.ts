import { TestBed, inject } from '@angular/core/testing';

import { OrderListService } from './order-list.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('OrderList.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [OrderListService]
    });
  });

  it('should be created', inject([OrderListService], (service: OrderListService) => {
    expect(service).toBeTruthy();
  }));
});
