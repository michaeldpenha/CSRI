import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MOrderListComponent } from './m-order-list.component';

describe('MOrderListComponent', () => {
  let component: MOrderListComponent;
  let fixture: ComponentFixture<MOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
