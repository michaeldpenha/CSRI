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
    //this.routerService.navigateTo('/dashboard');
    // this.LoadingService.show();
    // this.loginService.submitUserInfo(formOBj).subscribe(data => {
    //   this.routerService.navigateTo('/dashboard');
    //   this.LoadingService.hide();
    // },
    //   error => {
    //     this.LoadingService.hide();
    //     this.displayPopup(ModalComponent);
    //     //alert service to show error
    //   });
  }
  /**
   * displayPopup 
   */
  public displayPopup = (cmp : any) => {
    // this.modalRef = this.modalService.show(cmp, { ignoreBackdropClick: true, keyboard: false });
    // this.modalRef.content ? this.modalRef.content.modalMessage = 'Please enter valid credentials!!': '';
    // this.modalRef.content ? this.modalRef.content.headerMsg = 'Warning' : '';
    // this.modalRef.content ? this.modalRef.content.enableCancelBtn = false : '';
    // this.modalRef.content ? this.modalRef.content.enableSuccessBtn = true : '';
    // this.modalRef.content ? this.modalRef.content.successButtonText = 'Ok' : '';
    // this.modalRef.content ? this.modalRef.content.cancelButtonTxt = 'Cancel' :'';
    // this.modalRef.content ? this.modalRef.content.redirectPopUp = false : '';
  }
}
