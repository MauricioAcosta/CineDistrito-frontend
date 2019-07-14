import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/servicios/http/authentication.service';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(public activeModal: NgbActiveModal,
              private authenticationService:AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get f() { return this.loginForm.controls; }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit(){
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
        res =>{
          console.log(res);
        }
      );
  }


}
