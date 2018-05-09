import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesorderlistComponent } from './salesorderlist.component';
import { UtilsService } from '../../shared/services/utils/utils.service';

import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap';

describe('SalesorderlistComponent', () => {
  let component: SalesorderlistComponent;
  let fixture: ComponentFixture<SalesorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SalesorderlistComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule,BsDatepickerModule.forRoot()],
      providers: [UtilsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.soListData = [{
      fName: 'Michael',
      lName: 'Dpenha'
    }, {
      fName: 'Mayur',
      lName: 'Patil'
    }, {
      fName: 'Sheetal',
      lName: 'Aware'
    }, {
      fName: 'Sachin',
      lName: 'Rajput'
    }];
    component.defaultPage = 1;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort Grid Data Descending', () => {
    component.sortGridData({ property: 'fName', direction: -1 });
    expect(component.soListData[0].fName).toBe('Sheetal');
  });

  it('should sort Grid Data Ascending', () => {
    component.sortGridData({ property: 'fName', direction: 1 });
    expect(component.soListData[0].fName).toBe('Mayur');
  });
  it('should give the next page', () => {
    component.nextPage();
    expect(component.defaultPage).toBe(2);
  });
  it('should give the previous page', () => {
    component.previousPage();
    expect(component.defaultPage).toBe(0);
  });
  it('should the specific page data', () => {
    component.goToPage(5);
    expect(component.defaultPage).toBe(5);
  });
  it('should change the total number of records in one page', () => {
    component.pageLimitChange(30);
    expect(component.pageLimit).toBe(30);
  });
  it('should search record from grid ', () => {
    component.searchData('Michael');
    expect(component.data.length).toBe(1);
  });
  it('should display Advanced filter options', () => {
    component.displayFilterOption = false;
    component.displayFilterOptions();
    expect(component.displayFilterOption).toBe(true);
  });
  it('should not display Advanced filter options', () => {
    component.displayFilterOption = true;
    component.displayFilterOptions();
    expect(component.displayFilterOption).toBe(false);
  });
  it('should apply filter', () => {
    component.soListData = [{
      orderId: '15'
    }, {
      orderId: '10'
    }];
    component.filterForm.controls['orderId'].setValue('15');
    component.globalSearchText = '';
    component.applyFilter();
    expect(component.data.length).toBe(1);
  })

  it('should clear filter', () => {
    component.filterForm.controls['orderId'].setValue('15');
    component.clearFilter();
    expect(component.filterForm.controls['orderId'].value).toBeNull();
  });

  it('should filter array on condition', () => {
    component.soListData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume : '30'
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume : '100'
    }];
    component.filterForm.controls['volumeFrom'].setValue('10');
    component.filterForm.controls['volumeTo'].setValue('40');
    component.filterForm.controls['fromDate'].setValue(new Date("05/01/2018"));
    component.filterForm.controls['toDate'].setValue(new Date("05/08/2018"));
    component.globalSearchText = '';
    component.applyFilter();
    expect(component.data.length).toBe(1);
  });
  it('should select all PO', () => {
    component.allCheck = false;
    component.allSOSelected({});
    expect(component.selectedArray.length).toBe(component.soListData.length);

  });
  it('should seleect a particular row',() => {
    component.soListData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume : '30'
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume : '100'
    }];
    component.rowSelected({ orderId: '15'});
    expect(component.selectedArray[0].orderId).toBe('15');
  });
  it('should remove a slection of a particular row',() => {
    component.soListData = [{
      orderId: '15',
      deliveryDate: "2018-05-10",
      status: "Queued",
      volume : '30',
      selected : true
    }, {
      orderId: '10',
      deliveryDate: "2018-05-05",
      status: "Queued",
      volume : '100'
    }];
    component.selectedArray.push({ orderId: '15'});
    expect(component.selectedArray.length).toBe(1);
    component.rowSelected({ orderId: '15'});
    expect(component.selectedArray.length).toBe(0);
  });
});
