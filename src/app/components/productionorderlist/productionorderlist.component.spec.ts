import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionorderlistComponent } from './productionorderlist.component';

describe('ProductionorderlistComponent', () => {
  let component: ProductionorderlistComponent;
  let fixture: ComponentFixture<ProductionorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
