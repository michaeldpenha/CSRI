import { TestBed, inject } from '@angular/core/testing';

import { GridService } from './grid.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
describe('GridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridService],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should be created', inject([GridService], (service: GridService) => {
    expect(service).toBeTruthy();
  }));
});
