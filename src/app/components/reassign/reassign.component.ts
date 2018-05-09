import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { ReassignService } from './reassign.service';

@Component({
  selector: 'app-reassign',
  templateUrl: './reassign.component.html',
  styleUrls: ['./reassign.component.scss']
})
export class ReassignComponent implements OnInit {
  constructor() { }

  reassignForm: FormGroup;
  showDropdown: boolean = false;

  ngOnInit() {
    this.reassignForm = new FormGroup({
      so: new FormControl('')
    });
  }

  checkType() {
    if(this.reassignForm.controls.so.value == 'external') {
      this.showDropdown = true;
     } else {
      this.showDropdown = false;
     }
     return true;
  }

  onSubmitReassign(reassignForm){
     console.log(reassignForm.controls.so.value);
     return true;
  }

}
