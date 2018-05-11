import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReassignComponent } from './reassign.component';
import { Component } from '@angular/core';
import { HttpClient, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { ReassignService } from './reassign.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {UtilsService} from '../../shared/services/utils/utils.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('ReassignComponent', () => {
  let component: ReassignComponent;
  let fixture: ComponentFixture<ReassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule,RouterTestingModule],
      declarations: [ ReassignComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient, HttpHandler, ReassignService,UtilsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignComponent);
    component = fixture.componentInstance;
    component.selectedArray = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume: '30'
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume: '100'
    }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("reassign should be true", () => {
    //expect(component.onSubmitReassign(component.reassignForm)).toBeTruthy();
  });

});