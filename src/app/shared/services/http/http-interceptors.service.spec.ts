import { TestBed, inject } from '@angular/core/testing';

import { HttpInterceptorsService } from './http-interceptors.service';

describe('HttpInterceptorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpInterceptorsService]
    });
  });

  it('should be created', inject([HttpInterceptorsService], (service: HttpInterceptorsService) => {
    expect(service).toBeTruthy();
  }));
});
