import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderlistComponent } from './salesorderlist.component';
import { UtilsService } from '../../shared/services/utils/utils.service';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
describe('SalesorderlistComponent', () => {
  let component: SalesorderlistComponent;
  let fixture: ComponentFixture<SalesorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderlistComponent ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       providers:[UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
