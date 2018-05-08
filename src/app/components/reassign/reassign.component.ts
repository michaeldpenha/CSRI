import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  }

  onSubmit(reassignFormData){
     console.log(reassignFormData.controls.so.value);
  }

}
