import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { PodetailsComponent } from './podetails.component';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { SearchfieldComponent } from '../../shared/components/searchfield/searchfield.component';
describe('PodetailsComponent', () => {
  let component: PodetailsComponent;
  let fixture: ComponentFixture<PodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
