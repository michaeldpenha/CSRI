import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule } from '@angular/forms';
import { PodetailsComponent } from './podetails.component';
import { Component, OnInit, ViewChildren, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchfieldComponent } from '../../shared/components/searchfield/searchfield.component';
import { ArrayFilterPipe } from "../../shared/card-filter.pipe";
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { POdetailsService } from './podetails.service';
import { HttpClientModule } from '@angular/common/http';
import { UtilsService } from '../../shared/services/utils/utils.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
describe('PodetailsComponent', () => {
  let component: PodetailsComponent;
  let fixture: ComponentFixture<PodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule,FormsModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ PodetailsComponent,SearchfieldComponent,ArrayFilterPipe,CardsComponent ],
      providers: [POdetailsService,UtilsService,ArrayFilterPipe]
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
