import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReassignComponent } from './reassign.component';
import { Component } from '@angular/core';

describe('ReassignComponent', () => {
  let component: ReassignComponent;
  let fixture: ComponentFixture<ReassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ ReassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("reassign should be true", () => {
    expect(component.onSubmitReassign(component.reassignForm)).toBeTruthy();
  });

});