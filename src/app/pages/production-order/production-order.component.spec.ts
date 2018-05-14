import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionOrderComponent } from './production-order.component';
import { OrderListComponent, SearchfieldComponent, ButtonComponent, RemovableCardComponent, FilterPanelComponent } from '../../shared/components/index';
import { ReassignComponent } from '../../components/reassign/reassign.component'; 
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';
import {OrderListService,UtilsService} from '../../shared/services/index';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('ProductionOrderComponent', () => {
  let component: ProductionOrderComponent;
  let fixture: ComponentFixture<ProductionOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, BsDatepickerModule.forRoot(),RouterTestingModule,HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers : [OrderListService,UtilsService],
      declarations: [ProductionOrderComponent, FilterPanelComponent, OrderListComponent, ReassignComponent, SearchfieldComponent, ButtonComponent, RemovableCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
