import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

//servicios
import {RegistrarusuarioService} from 'src/app/servicios/signup/registrarusuario.service'

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {

  private signForm: FormGroup;
  private waitingForResponse:boolean;

  constructor(public activeModal: NgbActiveModal, 
              private formBuilder: FormBuilder,
              private RegistrarusuarioService:RegistrarusuarioService) {
                this.waitingForResponse = false;
               }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      documento: ['', [Validators.required,Validators.min(0)]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      telefono: ['', [Validators.required,Validators.min(0)]],
      direccion: ['', Validators.required],
      inputEmail: ['', [Validators.required, Validators.email]],
      inputPassworda: ['', Validators.required],
      inputPasswordb: ['', Validators.required]
    });

  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  onSubmit(){
    if (this.signForm.get('inputPassworda').value==this.signForm.get('inputPasswordb').value){
      this.waitingForResponse = true;
      this.RegistrarusuarioService.registrarUsuario(
        this.signForm.get('documento').value,
        this.signForm.get('telefono').value,
        this.signForm.get('direccion').value,
        this.signForm.get('usuario').value,
        this.signForm.get('inputEmail').value,
        this.signForm.get('nombres').value,
        this.signForm.get('apellidos').value,
        this.signForm.get('inputPassworda').value
      ).subscribe(
        data=>{
          console.log(data);
          alert('Usuario registrado exitosamente');
          this.waitingForResponse = false;
          this.closeModal();
        },
        error=>{
          console.error(error);
          alert('Los datos ingresados no son validos');
          this.waitingForResponse = false;
        }
      );
    }else{
      alert('Los campos de contraseña y confirmación no son iguales');
    }
  }


}
