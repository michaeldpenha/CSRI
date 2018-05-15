import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ReassignService } from './reassign.service';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
  selector: 'app-reassign',
  templateUrl: './reassign.component.html',
  styleUrls: ['./reassign.component.scss']
})
export class ReassignComponent implements OnInit {
  constructor(protected reassignService: ReassignService, private utils: UtilsService) { }
  @Input('selectionArray') selectedArray: any;
  @Input() headerText: string;
  @Input() selectionText: string;
  @Output() onCancelClick = new EventEmitter<any>();
  @Output() redirectTrigger = new EventEmitter<any>();
  reassignForm: FormGroup;
  public showDropdown: boolean = false;
  public satellites: any = [];
  public redirectionMedium: string = '';
  public param: any;
  ngOnInit() {
    this.initializeForm();
    this.fetchSatelliteInfo();
  }
  /**
   * initializeForm
   */
  public initializeForm = () => {
    this.reassignForm = new FormGroup({
      so: new FormControl(''),
      externalSatellite: new FormControl('')
    });
    this.redirectionMedium = 'satellite';
  }
  /**
   * fetchSatelliteInfo
   */
  public fetchSatelliteInfo = () => {
    this.reassignService.getSatellite().subscribe(
      (response) => {
        this.satellites = response.satellites;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  checkType = () => {
    this.redirectionMedium = this.reassignForm.controls.so.value;
  }

  onSubmitReassign(reassignForm) {
    if (this.isFormValid()) {
      this.param = this.manipulateParam();
      this.reAssign();
    }

  }
  /**
   * isFormValid 
   */
  public isFormValid = (): boolean => {
    let result = false;
    result = this.fetchValueForRedirect() != '';
    return result;
  }
  /**
   * fetchValueForRedirect
   */
  public fetchValueForRedirect = (): any => {
    let result;
    switch (this.redirectionMedium.toLocaleUpperCase()) {
      case 'SATELLITE': result = this.reassignForm.controls['externalSatellite'].value; break;
      case 'CDP': result = 'CDP'; break;
    }
    return result;
  }
  /**
   * manipulateParam
   */
  public manipulateParam = (): any => {
    let result = {};
    let medium = this.redirectionMedium.toLocaleUpperCase();
    if (medium != "CDP") {
      result['satelliteId'] = this.fetchValueForRedirect();
      result['salesOrderIds'] = this.toPopulateSelectedArray();
    }
    result['redirectOption'] = medium;
    return result;
  }
  /**
   * toPopulateSelectedArray 
   */
  public toPopulateSelectedArray = () : any => {
    let selectedOrders: any = [];
    this.selectedArray.forEach((item) => {
      selectedOrders.push(item.orderId);
    });
    return selectedOrders;
  }

  /**
   * removeSelectedArray
   */
  public removeSelectedArray = (e: any, item) => {
    let index = this.utils.fetchObjectFromAnArray(this.selectedArray, item, 'orderId');
    this.selectedArray.splice(index, 1);
  }
  /**
   * onCancel
   */
  public onCancel = () => {
    this.onCancelClick.emit();
  }
  /**
   * reAssign
   */
  public reAssign = () => {
    this.reassignService.patchSoReassign(this.param).subscribe(
      (response) => {
        console.log(response);
        this.redirectTrigger.emit();
      },
      (error) => {
        console.log(error)
      }
    );
  }
  /**
   * disableRedirect
   */
  public disableRedirect = () : boolean => {
    let result = true;
    result = this.selectedArray.length === 0 || this.redirectionMedium == '' || this.fetchValueForRedirect() == '';
    return result; 
    
  }
}
