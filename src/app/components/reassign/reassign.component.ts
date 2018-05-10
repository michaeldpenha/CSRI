import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ReassignService } from './reassign.service';

@Component({
  selector: 'app-reassign',
  templateUrl: './reassign.component.html',
  styleUrls: ['./reassign.component.scss']
})
export class ReassignComponent implements OnInit {
  constructor(protected reassignService: ReassignService) { }

  reassignForm: FormGroup;
  showDropdown: boolean = false;
  public satellites: any = [];
  public salesOrders: any = [];
  public SoReassign= {
    "redirectOption":"SATELLITE",
    "satelliteId":"2",
    "salesOrderIds":[1]
    };

  ngOnInit() {
    this.reassignForm = new FormGroup({
      so: new FormControl('')
    });

    this.reassignService.getSatellite().subscribe(
      (response) => { 
        console.log(response);
        this.satellites = response.satellites;
      },
      (error) => { 
        console.log(error) 
      }
    );

    this.reassignService.getSalesOrder().subscribe(
      (response) => { 
        console.log(response);
        this.salesOrders = response.salesOrders;
      },
      (error) => { 
        console.log(error) 
      }
    );

    this.reassignService.patchSoReassign(this.SoReassign).subscribe(
      (response) => { 
        console.log(response);
      },
      (error) => { 
        console.log(error) 
      }
    );

  }

  checkType() {
    if (this.reassignForm.controls.so.value == 'external') {
      this.showDropdown = true;
    } else {
      this.showDropdown = false;
    }
  }

  onSubmitReassign(reassignForm) {
    console.log(reassignForm.controls.so.value);
    return true;
  }

}
