import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, ModalModule, BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: Object;
  public modalRef: BsModalRef;
  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  /**
   * OnSubmit : It will submit form with username and password and will get the JWt token
   */
  public onSubmit = () => {
    const formOBj: Object = {
      username: this.loginForm.value['username'],
      password: this.loginForm.value['password']
    };
  }
}
