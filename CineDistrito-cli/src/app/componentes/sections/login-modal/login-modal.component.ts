import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//servicios
import { AuthenticationService } from 'src/app/servicios/http/authentication.service';
import { GestionarcredencialesService} from 'src/app/servicios/http/gestionarcredenciales.service';



@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;
  error:string;

  logged_in:boolean;

  constructor(public activeModal: NgbActiveModal,
              private authenticationService:AuthenticationService,
              private formBuilder: FormBuilder,
              private gestionarcredencialesService:GestionarcredencialesService) {
                if (this.gestionarcredencialesService.obtenerUsuarioActual()){
                  this.logged_in = true;
                }else{
                  this.logged_in = false;
                }
                
               }

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
        response =>{
          console.log(response);
          this.gestionarcredencialesService.guardarCredenciales(this.f.username.value,this.f.password.value);
          this.activeModal.close('Modal Closed');
        },
        error =>{
          console.log(error);
          this.error="Los datos ingresados son incorrectos";
        }
      );
  }

  closeSesion(){
    this.gestionarcredencialesService.borrarCredenciales();
    this.activeModal.close('Modal Closed');
  }


}
