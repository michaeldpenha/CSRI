import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderlistComponent } from './salesorderlist.component';
import { UtilsService } from '../../shared/services/utils/utils.service';

import { FormGroup, FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
describe('SalesorderlistComponent', () => {
  let component: SalesorderlistComponent;
  let fixture: ComponentFixture<SalesorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesorderlistComponent ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
       imports : [ FormsModule,ReactiveFormsModule,],
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
