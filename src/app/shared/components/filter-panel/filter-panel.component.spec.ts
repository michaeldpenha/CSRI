import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPanelComponent } from './filter-panel.component';

import { ButtonComponent } from '../../components/button/button.component';
describe('FilterPanelComponent', () => {
  let component: FilterPanelComponent;
  let fixture: ComponentFixture<FilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPanelComponent,ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should trigger apply',()=>{
    component.applyFilter.subscribe(() =>{
      expect(component).toBeTruthy();
    });
    component.apply();
  });

  it('should trigger clear',()=>{
    component.clearFilter.subscribe(() =>{
      expect(component).toBeTruthy();
    });
    component.clear();
  });
});
