import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderComponent } from './sales-order.component';
import { OrderListComponent, SearchfieldComponent, ButtonComponent, RemovableCardComponent, FilterPanelComponent } from '../../shared/components/index';
import { ReassignComponent } from '../../shared/components/reassign/reassign.component'; 
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {OrderListService,UtilsService} from '../../shared/services/index';


import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SalesOrderComponent', () => {
  let component: SalesOrderComponent;
  let fixture: ComponentFixture<SalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, BsDatepickerModule.forRoot(),RouterTestingModule,HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [OrderListService,UtilsService],
      declarations: [ SalesOrderComponent,FilterPanelComponent, OrderListComponent, ReassignComponent, SearchfieldComponent, ButtonComponent, RemovableCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
