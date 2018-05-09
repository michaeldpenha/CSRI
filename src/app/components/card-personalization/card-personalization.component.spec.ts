import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonalizationComponent } from './card-personalization.component';

describe('CardPersonalizationComponent', () => {
  let component: CardPersonalizationComponent;
  let fixture: ComponentFixture<CardPersonalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPersonalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
