import { TestBed, inject } from '@angular/core/testing';

import { ReassignService } from './reassign.service';

describe('ReassignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReassignService]
    });
  });

  it('should be created', inject([ReassignService], (service: ReassignService) => {
    expect(service).toBeTruthy();
  }));
});
