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
      so: new FormControl('')
    });
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
    let selectedOrders: any = [];
    this.selectedArray.forEach((item) => {
      selectedOrders.push(item.orderId);
    });
    this.param = {
      "redirectOption": this.redirectionMedium.toUpperCase(),
      "satelliteId": "2",
      "salesOrderIds": selectedOrders
    };
    this.reAssign();
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
}
