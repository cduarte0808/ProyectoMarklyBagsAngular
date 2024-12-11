import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private fb = inject(FormBuilder);
  
  contactoForm: FormGroup = this.fb.group({ 
    nombre: ['', [Validators.required, Validators.maxLength(100)]], 
    apellido: ['', [Validators.required, Validators.maxLength(100)]], 
    edad: ['0', [Validators.required, Validators.min(18), Validators.max(120)]], 
    correo: ['', [Validators.required, Validators.email]], 
    fechaNacimiento: ['', Validators.required], 
    numeroContacto: ['0', [Validators.required, Validators.maxLength(15)]], 
    pais: ['', Validators.required] 
  });

  enviarFormulario() {
    alert("Formulario validado y enviado correctamente !!!!");
  }

}
